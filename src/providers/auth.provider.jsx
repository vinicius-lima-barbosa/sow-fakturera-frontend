import { useEffect } from "react";
import { UserService } from "../services/user.service";
import useAuthStore from "../stores/auth.store";

export function AuthProvider({ children }) {
  const applySession = useAuthStore((state) => state.applySession);
  const clearSession = useAuthStore((state) => state.clearSession);
  const authenticated = useAuthStore((state) => state.authenticated);

  useEffect(() => {
    const init = async () => {
      const Service = new UserService();
      try {
        const userMe = await Service.getMe();
        applySession({ user: userMe });
      } catch {
        clearSession();
      }
    };

    init();
  }, [applySession, authenticated, clearSession]);

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.replace("/pricelist");
    }
  });

  return <>{children}</>;
}
