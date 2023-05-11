import React from 'react'
import { TouchableOpacity, Image , View, Text } from 'react-native'
import styles from './screenheader.style'
import { useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

  const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {

  // const [auth, setAuth] = useState();

  const ClearSessionGoogle = async  () => {
    console.log("I am going to kill the session");
    const jsonValue = await AsyncStorage.getItem("auth");
    console.log("The value being returned from", jsonValue);
    if (jsonValue != null) {
      const authFromJson = JSON.parse(jsonValue);
      console.log("The auth token", authFromJson.accessToken);

      await AuthSession.revokeAsync({
        token: authFromJson.accessToken
      }, {
        revocationEndpoint: "https://oauth2.googleapis.com/revoke"
      });

      console.log("The session has been killed");
      await AsyncStorage.removeItem("auth");
    }
  }

  return (
    <TouchableOpacity style = {styles.btnContainer}
    onPress = {() =>{ClearSessionGoogle()}}
    
    >
      <Image
        source = {iconUrl}
        resizeMode="cover"
        style = {styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn