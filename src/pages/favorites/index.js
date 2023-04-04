import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Favorites() {
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Página de Favoritos!!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4356'
    },
    title: {
        fontSize: 22
    }
})