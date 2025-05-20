import supabase from "../lib/supabaseClient";
import type { Session } from "@supabase/supabase-js";
import { createContext, useEffect, useState } from "react";

interface AuthContextType {
  loading: boolean;
  session: Session | null;
}

const AuthContext = createContext<AuthContextType>({
  loading: false,
  session: null,
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data } = await supabase.auth.getSession();

        setSession(data.session ?? null);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching session:", error);
        setLoading(false);
      }
    };

    fetchSession();

    // Subscribe to auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setLoading(false); // Set loading to false when the session changes
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ loading, session }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
