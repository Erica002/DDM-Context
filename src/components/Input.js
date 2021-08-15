import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export function Input(props){ 
    return(
            <View style={styles.form}>
                <TextInput
                    placeholder={props.textInput}
                    placeholderTextColor="#b2b2b2"
                    {...props}
                    style={styles.input} />
            </View>
    )
}

const styles = StyleSheet.create({

    form:{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        margin: 8,
        borderWidth: 1,
        borderColor:'#9599a2',
    },

    input: {
        flex: 1,
        margin: 18,
        fontSize: 20,
        color: 'black',
    },
});