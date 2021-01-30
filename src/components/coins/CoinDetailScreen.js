//import react
import React, { Component } from 'react';

//importamos los componetnes de react native
import {Text, View, StyleSheet} from 'react-native';

//declaromos nuestro componente class

class  CoinsDetailsScreen extends Component{
  
    render(){
        return(
            <View style = {styles.container}>
            <Text> Mi primer pantalla detail  en react native</Text>

            </View>
        )
    }
}
 // declaromos styllesSheet

 const styles = StyleSheet.create ({
     container:{
         backgroundColor: 'yellow',
         flex: 1,
     }
 }) 
//realizamos el export 

export default  CoinsDetailsScreen;