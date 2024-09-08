import React, { createContext, useContext, useEffect, useState } from "react";
interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | undefined;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | undefined>(undefined); // Replace 'any' with your User type

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
      if (response.ok) {
        const userDaa = await response.json();
        setIsAuthenticated(true);
        setUser(userDaa);
      } else {
        // setIsAuthenticated(false);
        console.error("Login is failed.");
      }
    } catch (error) {
      console.error("Login error: ", error);
    }
  };

  const logout = async () => {
    try {
      await fetch("http://localhost:8080/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      setIsAuthenticated(false);
      setUser(undefined); // clear user data
      document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // will delete the cookie after logout
    } catch (error) {
      console.error("Logout error: ", error);
    }
  };
  useEffect(() => {
    // checking if the user is already authenticated(by checking a cookie)
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("http://localhost:8080/auth/status", {
          credentials: "include",
        });
        if (response.ok) {
          const userData = await response.json();
          setIsAuthenticated(true);
          setUser(userData);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error checking authentication status: ", error);
      }
    };
    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
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
