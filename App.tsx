import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import AppContent from "./src/App";
import { useAuth } from "./src/utils/auth";

export default function App() {
  const { user, initializing } = useAuth();

  // While initializing, render nothing
  if (initializing) return null;

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        {user ? <AppContent /> : <AuthNavigator />}
      </SafeAreaView>
    </NavigationContainer>
  );
}
