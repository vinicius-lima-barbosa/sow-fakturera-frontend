import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useAuthStore from "../stores/auth.store";

export function ProtectRouteProvider({ children }) {
  const authenticated = useAuthStore((state) => state.authenticated);
  const loading = useAuthStore((state) => state.loading);

  const navigate = useNavigate();
  const location = useLocation();
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (!loading && !authenticated && !redirecting) {
      setRedirecting(true);

      navigate("/login", {
        replace: true,
      });
      return;
    }

    if (!loading && authenticated) {
      navigate("teste", { replace: true });
    }
  }, [authenticated, loading, navigate, location, redirecting]);

  if (loading) {
    return <div>Loading Page...</div>;
  }

  if (redirecting || !authenticated) {
    return <div>Redirecting...</div>;
  }

  return <>{children}</>;
}
