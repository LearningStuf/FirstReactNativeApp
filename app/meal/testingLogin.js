import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from './Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { COLORS , SIZES} from '../../constants';


const TestingLogin = (props) => {

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

    <SafeAreaView style ={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Background>
      <ScrollView showsVerticalScrollIndicator = {false}>
            <View
                style = {{
                    flex: 1,
                    padding: SIZES.medium
                }}
                >
      
        <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: 'white', fontSize: 64 }}>Let's start</Text>
        <Text style={{ color: 'white', fontSize: 64, marginBottom: 40 }}>Coding</Text>
        {/* <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} /> */}
        <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => {getPersistedAuth()}} />
        <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => router.push(`/meal/Signup`)} />
        </View>
                
      </View>

      </ScrollView>
      </Background>
    </SafeAreaView>
  );
}

export default TestingLogin
