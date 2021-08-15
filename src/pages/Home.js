import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export function Home({navigation}){

    return(
        <View style={styles.container}>
            <View style={ styles.cabeçalho}>
                <Text style={styles.title}> DDM - ATIVIDADE CONTEXT </Text>
            </View>
            <TouchableOpacity style= {styles.button} onPress={()=>navigation.navigate('pagina1')}>
                <Text style={styles.textoBotao}>Dados Pessoais</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.button} onPress={()=>navigation.navigate('pagina2')}>
                <Text style={styles.textoBotao}>Dados Profissionais</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.button} onPress={()=>navigation.navigate('pagina3')}>
                <Text style={styles.textoBotao}>Resumo dos Dados</Text>
            </TouchableOpacity>
            
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3333cc',
    },

    title:{
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
    },
    
    button: {
        marginTop: 30,
        width: 270,
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