import React from 'react'
import { TouchableOpacity, Image , View, Text } from 'react-native'
import styles from './screenheader.style'
import { useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

  const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {

  const [auth, setAuth] = useState();

  return (
    <TouchableOpacity style = {styles.btnContainer}

    onPress = { async () => {
      // await AuthSession.revokeAsync({
      //   token: auth.accessToken
      // }, {
      //   revocationEndpoint: "https://oauth2.googleapis.com/revoke"
      // });
  
      setAuth(undefined);
      // setUserInfo(undefined);
      console.log("Just about to clear async storage")
      await AsyncStorage.removeItem("auth");
      console.log("logout")
    }}
    
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