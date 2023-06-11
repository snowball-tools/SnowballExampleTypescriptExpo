import { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { authenticate, register, recover, getUser } from "../api"; 

type User = {
  id: string;
  email: string;
};

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    // Check if the user is already logged in when the app starts
    const checkUser = async () => {
      const userId = await SecureStore.getItemAsync("userId");

      if (userId) {
        // Load user data from the server
        const user = await getUser(userId); 
        setUser(user);
      }

      setInitializing(false);
    };

    checkUser();
  }, []);

  const authenticated = user !== null;

  const login = async (email: string, password: string) => {
    const user = await authenticate(email, password);

    // Save user ID in secure store
    await SecureStore.setItemAsync("userId", user.id);

    setUser(user);
  };

  const logout = async () => {
    // Clear user ID from secure store
    await SecureStore.deleteItemAsync("userId");

    setUser(null);
  };

  const signUp = async (email: string, password: string) => {
    const user = await register(email, password);

    // Save user ID in secure store
    await SecureStore.setItemAsync("userId", user.id);

    setUser(user);
  };

  const recoverPassword = async (email: string) => {
    await recover(email);
  };

  return {
    user,
    initializing,
    authenticated,
    login,
    logout,
    signUp,
    recoverPassword,
  };
};
