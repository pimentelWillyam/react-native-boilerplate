import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import FormScreen from './screens/FormScreen';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName= "Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Form" component={FormScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

type NavigationStacks = {
  "Home": undefined
  "Form": undefined
}

export type NavigationStackTypes = NativeStackNavigationProp<NavigationStacks>
