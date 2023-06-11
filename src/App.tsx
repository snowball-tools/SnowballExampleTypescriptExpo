import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator, AuthNavigator } from "./navigation";
import { useAuth } from "./utils/auth";

const App = () => {
  const { authenticated } = useAuth();

  return (
    <NavigationContainer>
      {authenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
