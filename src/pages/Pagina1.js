import React, { useState, useEffect, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Input} from '../components/Input';
import ResumeContext from '../contexts/ResumeProvider';

export function Pagina1({navigation}){
    const { salvarInformacoes } = useContext(ResumeContext);

    const [nome,setNome] = useState('');
    const [documento, setDocumento] = useState('');
    const [email,setEmail] = useState('');

    async function handleSaveInfo() {
        const data ={
            id: 1,
            name: nome,  
            cpf: documento,
            mail: email,
        }
     
        salvarInformacoes(data);
        navigation.navigate('home');
    }

    return(
        <View style={styles.container}>
            <View style={ styles.cabeçalho}>
                <Text style={styles.title}> - DADOS PESSOAIS</Text>
            </View>
            <View style={styles.formulario}>
                <Input textInput="Nome: " value={nome} onChangeText={setNome} /> 
                <Input textInput="CPF: " value={documento} onChangeText={setDocumento} keyboardType="numeric" /> 
                <Input textInput="Email: " value={email} onChangeText={setEmail} />
                <TouchableOpacity style= {styles.button} onPress={handleSaveInfo}>
                    <Text style={styles.textoBotao}>Salvar</Text>
                </TouchableOpacity>
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        paddingVertical: 30,
        backgroundColor: 'white',
    },
    
    cabeçalho:{
        height: 65,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#3333cc',
    },

    title:{
        fontSize: 22,
        color: 'white',
        marginLeft: 10,
        fontWeight: 'bold',
    },

    formulario:{
        width: "85%",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    
    button: {
        marginTop: 30,
        width: 285,
        borderRadius: 5,
        padding: 20,
        backgroundColor: '#3333cc',  
    },

    textoBotao: {
        fontSize: 22,
        textAlign: 'center',
        color: 'white',
    },

});