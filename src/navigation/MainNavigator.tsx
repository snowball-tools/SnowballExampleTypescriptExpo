import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import HomeScreen from "../screens/HomeScreen";
import { HomeStackParamList } from "./StackParamList";

const Stack = createStackNavigator<HomeStackParamList>();

const MainNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

export default MainNavigator;
