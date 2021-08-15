import React, {useContext} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ResumeContext from '../contexts/ResumeProvider';

export function Pagina3(){
    const {list} = useContext(ResumeContext);


return(
    <View style={styles.container}>
    <View style={ styles.cabeçalho}>
        <Text style={styles.title}> - RESUMO DOS DADOS: {list.length}</Text>
    </View>
    <View style={styles.informacoes}>  
                <FlatList  data = {list} 
                keyExtractor = {item => item.id.toString()} 
                    renderItem={ ({item}) =>  (
                        <View style={styles.listagemInfo}>
                            <Text>Nome: {item.name}</Text>
                            <Text>CPF: {item.cpf}</Text>
                            <Text>Email: {item.mail}</Text>
                        </View> 
                    ) }
                />
           </View>
           <View style={styles.informacoes}>  
                <FlatList  data = {list} 
                keyExtractor = {item => item.id.toString()} 
                    renderItem={ ({item}) =>  (
                        <View  style={styles.listagemInfo} >
                            <Text>Escolaridade: {item.escolaridade}</Text>
                            <Text>Idiomas: {item.idiomas}</Text>
                            <Text>Experiência: {item.experiencia}</Text>
                        </View> 
                    ) }
                />
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


    informacoes:{
        width: "90%",
    },

    listagemInfo:{
        height: 80,
        padding: 5,
        margin: 8,
        borderRadius: 8,
        backgroundColor: '#F4F4F4',
        borderWidth: 1,
        borderColor: '#c4c3c3',
    },
}
);
