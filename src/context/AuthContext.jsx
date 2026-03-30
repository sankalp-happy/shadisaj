import { createContext, useContext, useState, useCallback } from 'react';
import { getCurrentUser, login as authLogin, logout as authLogout, register as authRegister, updateProfile as authUpdateProfile } from '../data/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Use lazy initialization to read from localStorage on first render
  const [user, setUser] = useState(() => getCurrentUser());
  const [loading] = useState(false);

  const login = useCallback(async (email, password) => {
    const result = authLogin(email, password);
    if (result.success) {
      setUser(result.user);
    }
    return result;
  }, []);

  const register = useCallback(async ({ name, email, password, phone }) => {
    const result = authRegister({ name, email, password, phone });
    if (result.success) {
      setUser(result.user);
    }
    return result;
  }, []);

  const logout = useCallback(() => {
    authLogout();
    setUser(null);
  }, []);

  const updateProfile = useCallback(({ name, phone }) => {
    const result = authUpdateProfile({ name, phone });
    if (result.success) {
      setUser(result.user);
    }
    return result;
  }, []);

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
