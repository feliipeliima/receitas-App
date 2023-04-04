import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from '../pages/home';
import Favorites from '../pages/favorites';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes(){
  return(
    <Tab.Navigator
    screenOptions={{
      headerShown:false,
      tabBarHideOnKeyboard: true, // Se houver um campo de texto para digitar, a TabBar não irá ficar encima do Teclado, vai esconder.
      tabBarShowLabel: false, //Esconde o nome do Icone da TabBar
      tabBarActiveTintColor: "#121212",

      tabBarStyle:{
        backgroundColor: "#FFF",
        borderTopWidth: 0
      }
    }}
    >
    <Tab.Screen 
    name="HomeTab" 
    component={Home} 
    options={{
    tabBarIcon:({color, size, focused}) => {
      if(focused){
      return  <Ionicons name="home" color="#000" size={size} />
      }
      return <Ionicons name="home-outline" color="{color}" size={size} />
    }
    }} 
  /* tabBarIcon:({ color, size, focused }) => {
  return <Ionicons name="home-outline" color={color} size={size}/>;
  } */
    />
    <Tab.Screen 
    name="Favorites" 
    component={Favorites} 
    options={{
    tabBarIcon:({ color, size, focused}) =>{
      if(focused){
        return <Ionicons name="heart" color="#FF4141" size={size} />;
      }
    
      return <Ionicons name="heart-outline" color={'#000'} size={size}/>;
    }
    }}
    />
    </Tab.Navigator>
  )
}


/* import React from 'react';

import Home from '../pages/home';
import Search from '../pages/search';
import Detail from '../pages/detail';
import Favorites from '../pages/favorites';

import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function Routes() {
 return (
   <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Search" component={Search}/>
    <Stack.Screen name="Detail" component={Detail}/>
    <Stack.Screen name="Favorites" component={Favorites}/>
   </Stack.Navigator>
  );
} */