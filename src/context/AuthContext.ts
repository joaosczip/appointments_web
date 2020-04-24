import { createContext } from "react";

interface AuthContextInterface {
  name: string;
}

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

export default AuthContext;
