// //importamos react
// import React, {Component} from 'react';
// // importar los componentes nativos de react
// //pressable es un componente que podemos hacer clic o tab
//  import {View,Text, Pressable, StyleSheet } from 'react-native';

//  // declaramos nuesto componente de tipo clase

//  class CoinScreen extends Component{

//     handlePress = () =>{
//         console.log("vamos a detalle", this.props);

//         this.props.navigation.navigate('DetailsCoponent');
//     }
//      render(){
//          return(
//              <View style={styles.container}>
//                  <Text style={styles.btnText}>Mi primer pantalla de Coins Screen </Text>
//                  <Pressable style={styles.btn} onPress={this.handlePress}><Text style={styles.btnText}>Ir a detelle</Text></Pressable>
//              </View>

//          );
//      }
//  }
 
//  //declaramos los estilos para el boton para ello declaramos StyleSheet
//  const styles = StyleSheet.create({
//      container: {
//          flex : 1,
//          backgroundColor: "red"

//      },
//      btn: {
//         padding : 8 ,
//         backgroundColor: "blue",
//         borderRadius: 8,
//         margin: 16
//      },
//      btnText:{
//          color:"#fff",
//          textAlign: "center",
//      }

//  });

// export default CoinScreen;

import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default class App extends Component {
constructor(props) {
super(props);

this.state = {
data: [],
isLoading: true
};
}

componentDidMount() {
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((json) => {
this.setState({ data: json });
})
.catch((error) => console.error(error))
.finally(() => {
this.setState({ isLoading: false });
});
}

render() {
const Item = ({ title }) => (
<View>
<Text>{title}</Text>
</View>
);

const { data, isLoading } = this.state;
const renderItem = ({ item }) => (
<Item title={item.title} />
);
return (
<View style={{ flex: 1, padding: 24 }}>
{isLoading ? <ActivityIndicator/> : (
<FlatList
data={data}
renderItem={renderItem}
keyExtractor={item => item.id}
/>
)}
</View>
);
}
};