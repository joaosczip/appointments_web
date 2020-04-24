import React, { createContext, useCallback } from "react";
import api from "../services/api";

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextInterface {
  name: string;
  signIn({}: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("sessions", {
      email,
      password,
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: "Some name", signIn }}>
      {children}
    </AuthContext.Provider>
  );
};