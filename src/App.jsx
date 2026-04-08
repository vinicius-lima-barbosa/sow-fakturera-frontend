import { RouterProvider } from "react-router";
import { AuthProvider } from "./providers/auth.provider.jsx";
import { routes } from "./routes/index.jsx";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}

export default App;
