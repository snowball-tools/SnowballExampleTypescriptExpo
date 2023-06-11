import React from "react";
import { View, Text, Button } from "react-native";
import { useTranslation } from "react-i18next";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../navigation/StackParamList";

type Props = StackScreenProps<HomeStackParamList, "Home">;

const HomeScreen: React.FC = () => (
  <View>
    <Text>Welcome to Home Screen!</Text>
  </View>
);

export default HomeScreen;
