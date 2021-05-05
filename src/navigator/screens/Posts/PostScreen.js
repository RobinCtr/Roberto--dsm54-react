import * as React from 'react';

import {Text,View,StyleSheet, Image} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';

/* FUNCION DE NUESTRA PANTALLA DE POst */
export default function ScreenPost(){
  return(
      <>
     <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"}]}>
        {/* VISTA CATEGORI 1 */}
        <Text>Laravel    Ver Más</Text>

        <Card>
  <CardImage 
    source={{uri: 'http://placehold.it/480x270'}} 
    title="Above all i am here"
  />
  <CardTitle 
    title="This is a title" 
    subtitle="This is subtitle"
   />
  <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
  <CardAction 
    separator={true} 
    inColumn={false}>
    <CardButton
      onPress={() => {}}
      title="Push"
      color="blue"
    />
    <CardButton
      onPress={() => {}}
      title="Later"
      color="blue"
    />
  </CardAction>
</Card>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    },
    imageCategory: {
        width: 68,
        height: 68,
      },

}); 