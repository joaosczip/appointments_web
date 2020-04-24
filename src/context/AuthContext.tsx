import React, { createContext, useCallback } from "react";

interface AuthContextInterface {
  name: string;
  signIn(): void;
}

export const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => {
    console.log("Sign in");
  }, []);

  return (
    <AuthContext.Provider value={{ name: "Some name", signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
