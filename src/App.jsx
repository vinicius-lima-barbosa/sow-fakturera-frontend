import { AuthProvider } from "./providers/auth.provider.jsx";

function App() {
  return (
    <AuthProvider>
      <h1>Hello World</h1>
    </AuthProvider>
  );
}

export default App;
