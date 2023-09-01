import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, Alert, ProgressBarAndroidBase } from "react-native";
import { SafeAreaView, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import ProgressView from "../../view/ProgressView";
// import { useNavigation } from '@react-navigation/native';
// import MarqueeView from 'react-native-marquee-view';
// import { MarqueeView } from 'react-native-marquee-view'
// import MarqueeText from 'react-native-marquee';
import Jobs from '../../common/jobs';

const HomePageWebNew = ({navigation}) => {


    const [text_first, onChangeTextFirst] = React.useState('');
    const [text_second, onChangeTextSecond] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState('');
    const [shouldShow, setShouldShow] = useState(false);
    // const navigation = useNavigation(); 


   



    return (
        <View style={{ flex: 1, justifyContent: 'centre', alignItems: 'center', marginTop: 20, padding: 5 }}>
            <View style={styles.header}>
                <Button title="Jobs" color='#rgba(52, 52, 52, 0.0)' style={styles.button} 
                
                onPress={() =>
                    navigation.navigate('Jobs', {name: 'Jobs'})
                 }>

                </Button>
                <View style={{ width: 10 }} > </View>
                <Button title="News" color='#rgba(52, 52, 52, 0.0)' style={styles.button}></Button>
                <View style={{ width: 10 }} > </View>
                <Button title="Utility " color='#rgba(52, 52, 52, 0.0)' style={styles.button}></Button>
                <View style={{ width: 10 }} > </View>
                <Button title="Tutorials " color='#rgba(52, 52, 52, 0.0)' ></Button>
                <View style={{ width: 10 }} > </View>
                <Button title="Blogs " color='#rgba(52, 52, 52, 0.0)'></Button>
                <View style={{ width: 10 }} > </View>
                <Button title="Contact Us " color='#rgba(52, 52, 52, 0.0)' ></Button>
            </View>


            {/* <View style={styles.container}>
                <MarqueeText
                    style={{ fontSize: 24 }}
                    speed={1}
                    marqueeOnStart={true}
                    loop={true}
                    delay={1000}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting industry.
                </MarqueeText>
            </View> */}

         
                {/* <MarqueeView
                    style={{
                        backgroundColor: 'blue',
                        width: 200,
                    }}>
                    <View style={{ backgroundColor: 'red' }}>
                        <Text>This is demo content</Text>
                    </View>
                </MarqueeView> */}


        </View>
    )
}


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

export default HomePageWebNew;