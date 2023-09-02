import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePageWebNew from './src/pages/web/HomePageWebNew';
import Jobs from './src/common/Jobs';
import ContactUs from './src/common/ContactUs';
import Education from './src/common/Education';
import MyProfile from './src/common/MyProfile';
import TopNews from './src/common/TopNews';
import Tutorials from './src/common/Tutorials';
import Utility from './src/common/Utility';
import Blogs from './src/common/Blogs';
import LoveCalculator from './src/pages/web/LoveCalculator';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='HomePageWebNew'>
        <Stack.Screen name='Home' component={HomePageWebNew} />
        <Stack.Screen name="Jobs" component={Jobs} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="Education" component={Education} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="TopNews" component={TopNews} />
        <Stack.Screen name="Tutorials" component={Tutorials} />
        <Stack.Screen name="Utility" component={Utility} />
        <Stack.Screen name="Blogs" component={Blogs} />
        <Stack.Screen name="LoveCalculator" component={LoveCalculator} />

      </Stack.Navigator>
    </NavigationContainer>
  )

  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.title}>Hello from My dear {'\n'}React Native Web!</Text>
  //     <TouchableOpacity
  //       onPress={() => setCount(count + 1)}
  //       style={styles.button}>
  //       <Text>Click me!</Text>
  //     </TouchableOpacity>

  //     <Text>You clicked {count} times!</Text>
  //   </View>
  // );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3E8BD',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ADBDFF',
    padding: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 40,
  },
});

export default App;