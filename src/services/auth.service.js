import api from "../lib/axios";

export class AuthService {
  login = async (email, password) => {
    const response = await api.post("/auth/login", {
      email,
      password,
    });
    return response.data.data;
  };

  logout = async () => {
    const response = await api.post("/auth/logout");
    return response.data.data;
  };
}
