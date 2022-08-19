import React from 'react';
import { View, Text } from 'react-native';
import AppStack from './src/routes/AppStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Registerscreen from './src/screens/Registerscreen';
import Homescreen from './src/screens/Homescreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <AppStack/>
  )
}


export default App;
