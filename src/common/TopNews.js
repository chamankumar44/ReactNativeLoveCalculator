import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, Alert } from "react-native";
import { SafeAreaView, TextInput } from 'react-native';
import { useState, useEffect } from 'react';

const TopNews = ({ navigation }) => {

    return (
        <View style={{ flex: 1, justifyContent: 'centre', alignItems: 'center', marginTop: 20, padding: 5 }}>
            <View style={styles.header}>
                <Button title="Home" color='#rgba(52, 52, 52, 0.0)' style={styles.button} onPress={() => navigation.navigate('Home', { name: 'Home' })}></Button>
                <View style={{ width: 10 }} > </View>
                <Button title="Jobs" color='#rgba(52, 52, 52, 0.0)' style={styles.button} onPress={() => navigation.navigate('Jobs', { name: 'Jobs' })}></Button>
                <View style={{ width: 10 }} > </View>
                <Button title="Utility " color='#rgba(52, 52, 52, 0.0)' style={styles.button} onPress={() => navigation.navigate('Utility', { name: 'Utility' })}></Button>
                <View style={{ width: 10 }} > </View>
                <Button title="Tutorials " color='#rgba(52, 52, 52, 0.0)' style={styles.button} onPress={() => navigation.navigate('Tutorials', { name: 'Tutorials' })}></Button>
                <View style={{ width: 10 }} > </View>
                <Button title="Blogs " color='#rgba(52, 52, 52, 0.0)' style={styles.button} onPress={() => navigation.navigate('Blogs', { name: 'Blogs' })}></Button>
                <View style={{ width: 10 }} > </View>
                <Button title="Contact Us " color='#rgba(52, 52, 52, 0.0)' style={styles.button} onPress={() => navigation.navigate('ContactUs', { name: 'ContactUs' })}></Button>
                <View style={{ width: 10 }} > </View>
            </View>
        </View>
    )
}
``



const styles = StyleSheet.create({
    button: {

        height: 40,
        margin: 12,
        padding: 10,
        color: '#rgba(52, 52, 52, 0.1)',
        backgroundColor: '#rgba(52, 52, 52, 0.1)',

    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    header: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#rgba(52, 52, 52, 0.5)',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        top: 0 //Here is the trick

    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 10,
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 3,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
});
export default TopNews;