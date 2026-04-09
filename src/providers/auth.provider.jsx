import { useEffect } from "react";
import useAuthStore from "../stores/auth.store";

export function AuthProvider({ children }) {
  const { login } = useAuthStore();
  const applySession = useAuthStore((state) => state.applySession);
  const clearSession = useAuthStore((state) => state.clearSession);
  const authenticated = useAuthStore((state) => state.authenticated);

  useEffect(() => {
    const init = async () => {
      try {
        const userMe = await login();
        applySession({ user: userMe });
      } catch {
        clearSession();
      }
    };

    init();
  }, [applySession, authenticated, clearSession, login]);

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.replace("/teste");
    }
  });

  return <>{children}</>;
}
