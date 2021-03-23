/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//importamos la librea de librea de navigation
import {View, Text} from 'react-native';
import CoinsStack from './src/components/coins/CoinsStack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Home() {
  return(
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center', backgroundColor:'#0C937A'}}>
    <Text>Pantalla de inicio</Text>
    </View>
  )
}

function categories() {
  return(
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center', backgroundColor:'#0C935E'}}>
    <Text>Pntalla de Categorias</Text>
    </View>
  )
}

function post() {
  return(
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center', backgroundColor:'#0C9349'}}>
    <Text>Pantalla de Post</Text>
    </View>
  )
}
const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <>
      {/* <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={'#0C0C0C'} size={20} />
              ),
            }}
            />
          <Tab.Screen name="Categories" component={categories}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="folder" color={'#0C0C0C'} size={20} />
              ),
            }}
          />
          <Tab.Screen name="Posts" component={post}
             options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="file" color={'#0C0C0C'} size={20} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer> */}
    <NavigationContainer>
       <CoinsStack/>
     </NavigationContainer>
    </>
   );
};


export default App;