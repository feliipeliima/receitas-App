import {View, Text, StyleSheet} from 'react-native'

export default function Search(){
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Página Buscar!!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#345'
    },
    title: {
        fontSize: 22
    }
})