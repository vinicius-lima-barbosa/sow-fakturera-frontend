import { useEffect } from "react";
import { AuthService } from "./services/auth.service";

function App() {
  const { login } = new AuthService();

  useEffect(() => {
    const init = async () => {
      await login("email@email.com", "senha123");
    };

    init();
  }, [login]);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
