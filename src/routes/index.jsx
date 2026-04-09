import { createBrowserRouter } from "react-router";
import LoginPage from "../pages/login.page";
import { MetadataProvider } from "../providers/metadata.provider";
import { ProtectRouteProvider } from "../providers/protect-route.provider";

export const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "login",
        element: (
          <MetadataProvider>
            <LoginPage />
          </MetadataProvider>
        ),
      },
      {
        path: "teste",
        element: (
          <ProtectRouteProvider>
            <div>teste</div>
          </ProtectRouteProvider>
        ),
      },
    ],
  },
]);
