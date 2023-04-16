
import { useState } from "react";
import { View, ScrollView,SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {COLORS, icons, images, SIZES} from "../constants";
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome, RecentRecipe, SearchIngredient, Recommend, Cookout} from "../components";

const Home = () => {
    const router = useRouter();

    const storeData = async (value) => {
        
        try {

          await AsyncStorage.setItem('UserName', value)
          console.log(value)
        } catch (e) {
          
        }
    }

    storeData("Hassan");


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
                    <Welcome
                    />
                    <Popularjobs/>
                    <RecentRecipe/>
                    <SearchIngredient
                        img= {"https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                        localTitle = {"Search By Category"}
                        routToPush = {"/Category/categories"}
                    />
                    {/* <SearchIngredient
                        img= {"https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=732&q=80"}
                        localTitle= {"Search By Ingredient"}
                    /> */}
                    <Recommend/>
                    <Cookout/>
            </View>
            </ScrollView>

    </SafeAreaView>
  );
}

export default Home;