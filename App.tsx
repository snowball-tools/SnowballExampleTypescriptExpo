import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import AppContent from "./src/App";
import { useAuth } from "./src/utils/auth";
import * as Font from "expo-font";

export default function App() {
  const { user, initializing } = useAuth();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "times-new-roman-regular": require("./assets/fonts/TimesNewRoman.ttf"),
        "times-new-roman-bold": require("./assets/fonts/TimesNewRomanBold.ttf"),
        "times-new-roman-bold-italic": require("./assets/fonts/TimesNewRomanBoldItalic.ttf"),
        "times-new-roman-italic": require("./assets/fonts/TimesNewRomanItalic.ttf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded || initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      {user ? <AppContent /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
