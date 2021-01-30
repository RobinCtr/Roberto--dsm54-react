//importamos react
import React, {Component} from 'react';
// importar los componentes nativos de react
//pressable es un componente que podemos hacer clic o tab
 import {View,Text, Pressable, StyleSheet } from 'react-native';

 // declaramos nuesto componente de tipo clase

 class CoinScreen extends Component{

 
     render(){
         return(
             <View style={styles.container}>
                 <Text style={styles.btnText}>Mi primer pantalla de Coins Screen </Text>
             </View>

         );
     }
 }
 
 //declaramos los estilos para el boton para ello declaramos StyleSheet
 const styles = StyleSheet.create({
     container: {
         flex : 1,
         backgroundColor: "red"

     },
     btn: {
        padding : 8 ,
        backgroundColor: "blue",
        borderRadius: 8,
        margin: 16
     },
     btnText:{
         color:"#fff",
         textAlign: "center",
     }

 });

export default CoinScreen;