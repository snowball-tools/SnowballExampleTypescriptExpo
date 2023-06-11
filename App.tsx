import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import AppContent from "./src/App";
import { useAuth } from "./src/utils/auth";

export default function App() {
  const { user, initializing } = useAuth();

  // While initializing, render nothing
  if (initializing) return null;

  return (
    <PaperProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" />
          {user ? <AppContent /> : <AuthNavigator />}
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
}
