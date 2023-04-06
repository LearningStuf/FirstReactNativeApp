import React from "react";
import { useState } from "react";
import { View, ScrollView,SafeAreaView, Text} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";

import {COLORS, icons, images, SIZES} from "../../constants";
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome, RecentRecipe, SearchIngredient, Recommend, Cookout} from "../../components";
import useFetch from "../../hook/useFetch";

const RecipeByCategories = () => {

    const params = useSearchParams();
    const router = useRouter();

    return (

        <View>
            <Text>RecipeByCategories</Text>
        </View>
    
    );
};

export default RecipeByCategories;


