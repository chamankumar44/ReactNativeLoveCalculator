import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import HomePage from "../mobile/pages/HomePage";


export default function AppNavigation (){

    return(
        
        <NavigationContainer>
              <Stack.Navigator initialRouteName={'HomePage'}>
      
      <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
        </NavigationContainer>
    )
}