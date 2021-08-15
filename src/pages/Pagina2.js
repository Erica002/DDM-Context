import React, { useState, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Input} from '../components/Input';
import ResumeContext from '../contexts/ResumeProvider';

export function Pagina2({navigation}){
    const { salvarInformacoes } = useContext(ResumeContext);

    const [ensino,setEnsino] = useState('');
    const [linguas, setLinguas] = useState('');
    const [xp,setXp] = useState('');
    
    async function handleSaveInfo() {
        const data ={
            id: 2,
            escolaridade: ensino,
            idiomas: linguas,
            experiencia: xp,
        }
        
        salvarInformacoes(data);
        navigation.navigate('home');
    }
    
    return(
        <View style={styles.container}>
            <View style={ styles.cabeçalho}>
                <Text style={styles.title}> - DADOS PROFISSIONAIS</Text>
            </View>
            <View style={styles.formulario}>
                <Input textInput="Nível de escolaridade: " value={ensino} onChangeText={setEnsino} /> 
                <Input textInput="Idiomas: " value={linguas} onChangeText={setLinguas} /> 
                <Input textInput="Experiência: " value={xp} onChangeText={setXp} />
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