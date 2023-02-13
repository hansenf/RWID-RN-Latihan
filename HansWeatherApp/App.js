import React, { useEffect, useState } from "react";
import IndexForecast from "./components/Weather/Index";
import TestScreen from "./components/Screen1"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TestScreen">
        <Stack.Screen name="Forecast" component={IndexForecast} />
        <Stack.Screen name="TestScreen" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
