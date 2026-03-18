import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { LoginCredentials } from '../types/auth';
import { loadAuthState, saveAuthState } from '../data/storage';

interface AuthContextValue {
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const VALID_USERNAME = import.meta.env.VITE_ADMIN_USERNAME;
const VALID_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => loadAuthState());

  const login = useCallback((credentials: LoginCredentials): boolean => {
    if (
      credentials.username === VALID_USERNAME &&
      credentials.password === VALID_PASSWORD
    ) {
      setIsAuthenticated(true);
      saveAuthState(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    saveAuthState(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
