import { useEffect } from "react";
import { UserService } from "../services/user.service";
import useAuthStore from "../stores/auth.store";

export function AuthProvider({ children }) {
  const applySession = useAuthStore((state) => state.applySession);
  const clearSession = useAuthStore((state) => state.clearSession);
  const authenticated = useAuthStore((state) => state.authenticated);

  useEffect(() => {
    const userService = new UserService();

    const init = async () => {
      try {
        const userMe = await userService.getMe();
        applySession({ user: userMe });
      } catch {
        clearSession();
      }
    };

    init();
  }, [applySession, authenticated, clearSession]);

  return <>{children}</>;
}
