import React from "react";

import { ToastProvider } from "./toast";
import { AuthProvider } from "./auth";

export const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};
