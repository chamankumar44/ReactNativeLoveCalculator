import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePageWebNew from './src/pages/web/HomePageWebNew';
import Jobs from './src/common/jobs';

const Stack = createNativeStackNavigator();
const App = () => {



  return (
    <NavigationContainer>

      <Stack.Navigator >
        {/* <Stack.Screen name='HomePage' component={HomePage} /> */}
        <Stack.Screen name='HomePageWeb' component={HomePageWebNew} />
        <Stack.Screen name="Jobs" component={Jobs} />

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