import React from "react";
import { ImageBackground, StyleSheet,Text, View, Button, Alert, ProgressBarAndroidBase } from "react-native";
import { SafeAreaView, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import ProgressView from "../../view/ProgressView";


const LoveCalculator = ()=>{


    const [text_first, onChangeTextFirst] = React.useState('');
    const [text_second, onChangeTextSecond] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState('');
    const [shouldShow, setShouldShow] = useState(false);


const alertPolyfill = (title, description, options) => {
    
    const result = window.confirm([title, description].filter(Boolean).join('\n'))

}
    
    const onPressSubmit = () => {

        console.log(" M clicked ");
        console.log("text_first " + text_first);
        console.log("text_second" + text_second);
        if (text_first == '')
        alertPolyfill('Blank Input Field','Please Enter First Name ','c') 
        else if (text_second == '')
        alertPolyfill('Blank Input Field','Please Enter Second Name ','c')   
        else {
            setShouldShow(true)
            getResult()
        };
    };

    const getResult = async () => {
        try {

            var myHeaders = new Headers();
            myHeaders.append("X-RapidAPI-Host", "love-calculator.p.rapidapi.com");
            myHeaders.append("X-RapidAPI-Key", "8fbeeb1576mshfd885bbd9238245p1e2858jsnd7474899c753");
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            let result = await fetch("https://love-calculator.p.rapidapi.com/getPercentage?sname=" + text_second + "&fname=" + text_first, requestOptions)
            let response = await result.json();
            console.log("Result is : " + response.fname)
            setShouldShow(false)
            setData(response)

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            setShouldShow(false)
        }
    };

    const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

    return (
        <View style={{ flex: 1, justifyContent: 'centre', alignItems: 'center', marginTop: 20, padding: 5 }}>
            <ImageBackground source={image} resizeMode="center" style={styles.header}>
                <View style={styles.image}>
                    
                    Hello </View>

                 </ImageBackground>

            <SafeAreaView style={{ marginTop: 150 , marginBottom : 20}}>
                <Text style={{ fontSize: 18 }} > Please Enter First Name </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTextFirst}
                    value={text_first}
                    placeholder="First name"
                />
                <Text style={{ fontSize: 18 }} > Please Enter Second Name </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTextSecond}
                    value={text_second}
                    placeholder="Second Name"
                    keyboardType="text"
                />
            </SafeAreaView>

           
            {/* <View style = {{ marginTop: 20}}> </View> */}
          
            <Button styles = {{marginTop : 130}}
                title="Calculate Love"
                onPress={() => {
                    console.log(" shouldShow " + shouldShow);
                    console.log(" data value  " + data);
                    onPressSubmit()
                }} />
                

            {
                shouldShow ? (
                    <ProgressView visible={true} />
                ) : <ProgressView visible={false} />

            }

            {
                data != "" ? <View>
                    <ProgressView visible={false} />
                    <Text style={{ fontSize: 30,marginTop : 30 }}>{"First Name : "} {<Text style={{ fontWeight: 'bold' }}> {data.fname}</Text>}</Text>
                    <Text style={{ fontSize: 30 }}>{"Second Name : "} {<Text style={{ fontWeight: 'bold' }}> {data.sname}</Text>}</Text>
                    <Text style={{ fontSize: 30 }}>{"Love Percentage : "} {<Text style={{ fontWeight: 'bold' }}> {data.percentage + "%"}</Text>}</Text>
                    <Text style={{ fontSize: 30 }}>{"Best Result : "} {<Text style={{ fontWeight: 'bold' }}> {data.result}</Text>}</Text>
                </View> : null
            }
         

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
    header : {
        width: '100%',
        height: 50,
        backgroundColor: '#EE5407',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        top : 0 //Here is the trick
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

export default LoveCalculator;