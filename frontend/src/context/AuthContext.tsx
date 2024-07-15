import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include", // this is set for HttpOnly cookie - important
      });
      if (!response.ok) {
        setIsAuthenticated(true);
      } else {
        console.error("Login failed.");
      }
    } catch (error) {
      console.error("Login error: ", error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  useEffect(() => {
    // checking if the user is already authenticated(by checking a cookie)
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("http://localhost:8080/auth/status", {
          credentials: "include",
        });
        setIsAuthenticated(response.ok);
      } catch (error) {
        console.error("Error checking authentication status: ", error);
      }
    };
    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used with an AuthProvider");
  }
  return context;
};
