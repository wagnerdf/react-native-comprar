import { createContext, useContext, useState } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  login: (user: string, pass: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login(user: string, pass: string) {
    if (user === "admin" && pass === "123") {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  }

  function logout() {
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
