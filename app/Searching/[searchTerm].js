import React from "react";
import { useState } from "react";
import { View, ScrollView,SafeAreaView, Text} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import RecipeByCateg from "../../components/home/recipesByCateg/RecipeByCateg";

import {COLORS, icons, images, SIZES} from "../../constants";
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome, RecentRecipe, SearchIngredient, Recommend, Cookout} from "../../components";
import useFetch from "../../hook/useFetch";

const SearchTerm = () => {

    const params = useSearchParams();
    const router = useRouter();
    // console.log(params.searchTerm)

    const urlToPass = `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.searchTerm}`;

  


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
                <RecipeByCateg
                    url = {urlToPass}
                    item = {"Select Your recipe"}
                />


            </View>
            </ScrollView>

    </SafeAreaView>
    
    );
};

export default SearchTerm;


