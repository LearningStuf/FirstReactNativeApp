import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from './Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack, useRouter } from 'expo-router';
import { COLORS , SIZES} from '../../constants';


const TestingLogin = (props) => {

  const image = { uri: "https://docs.expo.dev/static/images/tutorial/splash.png" };

  const router = useRouter();
  const getPersistedAuth = async () => {
    const jsonValue = await AsyncStorage.getItem("auth");
    console.log("The value being returned from", jsonValue);
    if (jsonValue != null) {
      router.push(`/home`)
    }

    else {
      router.push(`/meal/Login`)
    }
  }; 

  


  return (

    <SafeAreaView style ={{ 
      backgroundColor: COLORS.lightWhite,
    }}>
      <Stack.Screen
        options={{
            headerTitle : ""
        }}
      />

    <ImageBackground source={require("./leaves.jpg")} style={{ height: '100%' }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ color: 'white', fontSize: 64 , marginBottom: 200}}>Let's Start Cooking</Text>
            <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => {getPersistedAuth()}} />
            <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => router.push(`/meal/Signup`)} />
        </View>    
      </ImageBackground>
    </SafeAreaView>
  );
}

export default TestingLogin
