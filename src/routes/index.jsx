import { createBrowserRouter } from "react-router";
import LoginPage from "../pages/login.page";
import { ProtectRouteProvider } from "../providers/protect-route.provider";

export const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "login", element: <LoginPage /> },
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
