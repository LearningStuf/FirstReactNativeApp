import React from 'react';
import { Redirect, useRouter, Stack } from "expo-router";
import {View, Text, Touchable, TouchableOpacity, Image, Button, Platform, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen, green} from './Constants';
import Field from './Field';
import { COLORS , SIZES} from '../../constants';
import { StatusBar } from 'expo-status-bar';
import * as Google from 'expo-auth-session/providers/google';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';


const Login = (props) => {

    
    const [userInfo, setUserInfo] = useState();
    const [auth, setAuth] = useState();
    const [requireRefresh, setRequireRefresh] = useState(false);
    
    // const router = useRouter();


    const [request, response, promptAsync] = Google.useAuthRequest({

      androidClientId: "285477569975-0h0f30ne4bq0fj1pluakfrmohei6d2uf.apps.googleusercontent.com",
      // iosClientId: "139581308140-imf4dv4bogf4aj945eosqvnett4mp06e.apps.googleusercontent.com",
      expoClientId: "285477569975-v240pgcrr3e7ndesd518e55hunp9irr9.apps.googleusercontent.com"
    });

    console.log("This is the response", response);

    useEffect(() => {
      // console.log(response);
      if (response?.type === "success") {
        setAuth(response.authentication);

        console.log("This is the response authentication code",response.authentication);
        const persistAuth = async () => {
          await AsyncStorage.setItem("auth", JSON.stringify(response.authentication));
        };
        persistAuth();
      }
    }, [response]);

    useEffect(() => {
      const getPersistedAuth = async () => {
        const jsonValue = await AsyncStorage.getItem("auth");
        if (jsonValue != null) {
          const authFromJson = JSON.parse(jsonValue);
          setAuth(authFromJson);
          // console.log(authFromJson);
  
          setRequireRefresh(!AuthSession.TokenResponse.isTokenFresh({
            expiresIn: authFromJson.expiresIn,
            issuedAt: authFromJson.issuedAt
          }));
        }
      };
      getPersistedAuth();
    }, []);


  

    const getUserData = async () => {
      let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${auth.accessToken}` }
      });
  
      userInfoResponse.json().then(data => {
        // console.log(data);
        setUserInfo(data);
      });
    };

    const showUserData = () => {
      if (userInfo) {
        return (
          <View style={styles.userInfo}>
            <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
            <Text>Welcome {userInfo.name}</Text>
            <Text>{userInfo.email}</Text>
          </View>
        );
      }
    };

    const getClientId = () => {
      if (Platform.OS === "ios") {
        return "139581308140-imf4dv4bogf4aj945eosqvnett4mp06e.apps.googleusercontent.com";
      } else if (Platform.OS === "android") {
        return "139581308140-n3ebiqnid8tmskvneo7lck2cku8va9s3.apps.googleusercontent.com";
      } else {
        console.log("Invalid platform - not handled");
      }
    }

    const refreshToken = async () => {
      const clientId = getClientId();
      console.log(auth);
      const tokenResult = await AuthSession.refreshAsync({
        clientId: clientId,
        refreshToken: auth.refreshToken
      }, {
        tokenEndpoint: "https://www.googleapis.com/oauth2/v4/token"
      });
  
      tokenResult.refreshToken = auth.refreshToken;
  
      setAuth(tokenResult);
      await AsyncStorage.setItem("auth", JSON.stringify(tokenResult));
      setRequireRefresh(false);
    };


    const checkIfNeedsTobeRedirected = () => {
      // console.log("I am inside the method of the button", auth)
      if (auth) {
        props.navigation.navigate("TestingLogin")
      }
      else{
        promptAsync({ useProxy: true, showInRecents: true });
      }
      
   
  
    }



  return (
    <SafeAreaView style ={{flex: 1, backgroundColor: COLORS.lightWhite}}>

      <Stack.Screen
        options={{
            // headerStyle: {backgroundColor: COLORS.lightWhite},
            // headerShadowVisible: false,
            // headerLeft: () => (
            //     <ScreenHeaderBtn iconUrl = {icons.menu} dimension = "60%"/>
            // ),
            // headerRight: () => (
            //     <ScreenHeaderBtn iconUrl = {images.profile} dimension = "100%" />
            // ),
            headerTitle : ""
        }}
      />
    <Background>
    <ScrollView showsVerticalScrollIndicator = {false}>
            {/* <View
                style = {{
                    flex: 1,
                    padding: SIZES.medium
                }}
                > */}
      
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: darkGreen, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200}}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
            {/* <TouchableOpacity 
            onPress={() => props.navigation.navigate("Signup")}>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Sign in with google</Text>
            </TouchableOpacity> */}
            {/* <Btn bgColor={green} textColor='white' btnLabel="Sign in with Google" OnPress= {() =>  {checkIfNeedsTobeRedirected}}/> */}
            <TouchableOpacity onPress={() => {checkIfNeedsTobeRedirected()}}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Google</Text>
            </TouchableOpacity>
            {auth ? <Redirect href="/home" /> : undefined}
          </View>
          <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => alert("Logged In")} />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </View> */}
      </ScrollView>
    </Background>
    </SafeAreaView>
  );
};

export default Login;
