
import { useState } from "react";
import { View, ScrollView,SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import {COLORS, icons, images, SIZES} from "../../constants";
import NearByCookouts from "../../components/home/cookout/NearByCookouts";
import { ScreenHeaderBtn } from "../../components";

const joinCookout = () => {
    const router = useRouter();
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

              <NearByCookouts
              />
                  
            </View>
            </ScrollView>

    </SafeAreaView>
  );
}

export default joinCookout;