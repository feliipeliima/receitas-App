import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'

export default function Home(){
  
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Página Home!!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2343'
    },
    title: {
        fontSize: 22
    }
})