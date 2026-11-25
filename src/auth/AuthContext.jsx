import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { API_BASE_URL } from './authApi';

const AuthContext = createContext(null);
const STORAGE_KEY = 'posteroids.auth.session';

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => {
    try {
      return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || 'null');
    } catch {
      return null;
    }
  });
  const [ready, setReady] = useState(() => !session?.token);

  const saveSession = useCallback((authResponse) => {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(authResponse));
    setSession(authResponse);
    setReady(true);
  }, []);

  const clearSession = useCallback(() => {
    window.sessionStorage.removeItem(STORAGE_KEY);
    setSession(null);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!session?.token) return;

    let cancelled = false;
    fetch(`${API_BASE_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${session.token}`, Accept: 'application/json' },
    })
      .then(async (response) => {
        if (!response.ok) throw new Error('Your session has expired. Please sign in again.');
        return response.json();
      })
      .then((user) => {
        if (!cancelled) saveSession({ ...user, token: session.token });
      })
      .catch(() => {
        if (!cancelled) clearSession();
      })
      .finally(() => {
        if (!cancelled) setReady(true);
      });

    return () => { cancelled = true; };
  }, [session?.token, saveSession, clearSession]);

  const value = useMemo(() => ({
    user: session ? { email: session.email, name: session.name, role: session.role } : null,
    token: session?.token || null,
    ready,
    saveSession,
    signOut: clearSession,
  }), [session, ready, saveSession, clearSession]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
