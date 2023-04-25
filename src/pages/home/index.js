import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList} from 'react-native'

import {Ionicons} from '@expo/vector-icons';
import { Logo } from '../../components/logo';

import api from '../../services/api';
import FoodList from '../../components/foodlist';


export function Home(){

    const [input, setInput] = useState("");
    const [foods, setFoods] = useState([]);

    useEffect(()=>{
        async function fetchApi(){
        const response = await api.get("/foods/")
        setFoods(response.data)
        }

        fetchApi();

    }, []);

    function handleSearch(){
        console.log(input);
    }
  
    return(
        <SafeAreaView style={styles.container}>
        <Logo/>
        <Text style={styles.title}>Encontre a receita</Text>
        <Text style={styles.title}>que combina com você</Text>

        <View style={styles.form}>
         <TextInput
         style={styles.input}
         placeholder="Digite o nome da comida..."
         value={input}
         onChangeText={ (text) => setInput(text) }
         />
         <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={28} color="#4CBE6C"/>
         </TouchableOpacity>
        </View>

        <FlatList
        showsVerticalScrollIndicator={false}
        data={foods}
        keyExtractor={ (item) => String(item.id) }
        renderItem={ ({item}) => <FoodList data={item}/> }
        />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F3F9FF',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: "#0e0e0e"
    },
    form:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#FFF",
        width: '100%',
        marginTop: 16,
        marginBottom: 16,
        borderWidth:1,
        borderRadius: 8,
        borderColor: '#ECECEC',
        paddingLeft: 8,
        paddingRight: 8
    },
    input:{
        width: '90%',
        maxWidth: '90%',
        height: 54,
        fontSize: 16
    }
})