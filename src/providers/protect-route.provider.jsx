import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuthStore from "../stores/auth.store";

export function ProtectRouteProvider({ children }) {
  const authenticated = useAuthStore((state) => state.authenticated);
  const loading = useAuthStore((state) => state.loading);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !authenticated) {
      navigate("/login", {
        replace: true,
      });
    }
  }, [authenticated, loading, navigate]);

  if (loading) {
    return <div>Loading Page...</div>;
  }

  if (!authenticated) {
    return <div>Redirecting...</div>;
  }

  return <>{children}</>;
}
