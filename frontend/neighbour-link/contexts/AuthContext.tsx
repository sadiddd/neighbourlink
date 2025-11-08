import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// Basic shapes (kept minimal to match existing codebase)
type UserShape = {
  email?: string;
  token?: string;
  [k: string]: any;
};

type AuthContextShape = {
  user: UserShape | null;
  login: (userData: UserShape) => Promise<void>;
  logout: () => Promise<void>;
  setUserDirect?: (u: UserShape | null) => void;
};

const AuthContext = createContext<AuthContextShape | undefined>(undefined);

const STORAGE_KEY = "user";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserShape | null>(null);

  // helper to apply token to axios so other modules/requests include auth
  const applyToken = (token?: string | null) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  // Load user from local storage on app start
  useEffect(() => {
    const loadUser = async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed: UserShape = JSON.parse(stored);
          setUser(parsed);
          applyToken(parsed.token);
        }
      } catch (err) {
        // ignore parse errors for now
        console.warn("Failed to load stored user", err);
      }
    };
    loadUser();
  }, []);

  const login = async (userData: UserShape) => {
    // userData expected to include at least a token (if coming from server)
    setUser(userData);
    applyToken(userData?.token);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    } catch (err) {
      console.warn("Failed to persist user", err);
    }
  };

  const logout = async () => {
    setUser(null);
    applyToken(null);
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.warn("Failed to remove stored user", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, setUserDirect: setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
