import React from 'react';
import Login from '../screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Signup from '../screens/SignUp';
import ProductsList from '../screens/ProductsList';

const Stack = createNativeStackNavigator();

const NavigationControll = () => {
  return (
  
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Products List" component={ProductsList} />
    </Stack.Navigator>
  </NavigationContainer>

  );
};

export default NavigationControll;
