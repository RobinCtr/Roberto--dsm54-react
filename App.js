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

const App: () => React$Node = () => {
  return (
    <>  
     <NavigationContainer>
       <CoinsStack/>
     </NavigationContainer>

{/*     <View>
      <Text>Mi primer Hola mundo en react- Native</Text>
    </View> */}
    </>
  );
};



export default App;
  