import { StyleSheet, Text, View, SafeAreaView, ScrollView, Alert} from 'react-native'
import { Stack, useRouter } from "expo-router";
import HostCookout from '../../components/home/cookout/HostCookout';
import JoinCookout from '../../components/home/cookout/JoinCookout';
import { ScreenHeaderBtn } from '../../components';

import {COLORS, icons, images, SIZES} from "../../constants";

import React from 'react'

const cookout = () => {





  return (
    <SafeAreaView style ={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen
      options={{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerLeft: () => (
              <ScreenHeaderBtn iconUrl = {icons.menu} dimension = "60%"/>
          ),
          headerRight: () => (
              <ScreenHeaderBtn iconUrl = {images.profile} dimension = "100%"/>
          ),
          headerTitle : ""
      }}
      />

      <ScrollView showsVerticalScrollIndicator = {false}>
          <View
              style = {{
                  flex: 1,
                  padding: SIZES.medium
              }}
              >
  
                  <HostCookout
                      img= {"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                      localTitle = {"Host a Cookout"}
                      routToPush = {"/home"}
                  />
                  <JoinCookout
                      img= {"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80"}
                      localTitle= {"Join a Cookout"}
                      routToPush = {"/Cookouts/joinCookout"}
                  />
          </View>
          </ScrollView>

    </SafeAreaView>
  )
}

export default cookout

const styles = StyleSheet.create({})