import React from "react";
import 'react-native-gesture-handler';
import { Text, View, Button, Alert, ProgressBarAndroidBase } from "react-native";
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import ProgressView from "../../view/ProgressView";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';



import { createDrawerNavigator } from '@react-navigation/drawer';

import Feed from "./Feed";
import CurrentNews from "./CurrentNews";



const Drawer = createDrawerNavigator();

const HomePage = () => {


    // const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-8118826265420904/5678965061';

    return (
        <View style={{ flex: 1, justifyContent: 'centre', alignItems: 'center', marginTop: 20, padding: 5 }}>
            <Text> This is home page </Text>


            {/* <View style={{ flex: 1,  marginTop: 0, padding: 5 , width : 100 }}>
                <Drawer.Navigator>
                    <Drawer.Screen name="Feed" component={Feed} />
                    <Drawer.Screen name="CurrentNews" component={CurrentNews} />
                </Drawer.Navigator> */}

                <Text> Ting T </Text>
            {/* </View> */}

        </View>
    )

}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 10,
    },
    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#EE5407',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
});

export default HomePage

