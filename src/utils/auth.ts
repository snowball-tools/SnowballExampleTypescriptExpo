import { useState, useEffect } from "react";
import { authenticate, register, recover, getUser } from "../api";

type User = {
  id: string;
  email: string;
};

//  DO NOT USE FOR PRODUCTION THIS IS A DEMO FUN EXPLORATION
export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState(true);

  //  DO NOT USE FOR PRODUCTION THIS IS A DEMO FUN EXPLORATION
  useEffect(() => {
    // Check if the user is already logged in when the app starts
    const checkUser = async () => {
      setInitializing(false);
    };

    checkUser();
  }, []);

  const authenticated = user !== null;

  //  DO NOT USE FOR PRODUCTION THIS IS A DEMO FUN EXPLORATION
  const login = async (email: string, password: string) => {
    const user = await authenticate(email, password);
    setUser(user);
  };

  //  DO NOT USE FOR PRODUCTION THIS IS A DEMO FUN EXPLORATION
  const logout = async () => {
    setUser(null);
  };

  //  DO NOT USE FOR PRODUCTION THIS IS A DEMO FUN EXPLORATION
  const signUp = async (email: string, password: string) => {
    const user = await register(email, password);

    setUser(user);
  };

  //  DO NOT USE FOR PRODUCTION THIS IS A DEMO FUN EXPLORATION
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
