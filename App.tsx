import React from "react";
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
      {user ? <AppContent /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
