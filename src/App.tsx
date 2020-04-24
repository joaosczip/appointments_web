import React from "react";

import GlobalStyle from "./styles/global";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import AuthContext from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContext.Provider value={{ name: "Some name" }}>
        <SignIn />
      </AuthContext.Provider>
      <GlobalStyle />
    </>
  );
}

export default App;
