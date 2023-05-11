import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestingLogin from './meal/TestingLogin';
import Login from './meal/Login';
import Signup from './meal/Signup';
import Home from './home'
import { Redirect } from 'expo-router';



const Stack = createNativeStackNavigator();


export default function Index()  {
  return (
    // <NavigationContainer independent={true}>
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="TestingLogin" component={TestingLogin} />
    //     <Stack.Screen name="Signup" component={Signup} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Home" component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Redirect href="/meal/TestingLogin" />

  );
}


