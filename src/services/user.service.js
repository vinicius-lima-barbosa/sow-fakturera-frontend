import api from "../lib/axios";

export class UserService {
  getMe = async () => {
    const response = await api.get("/users/");
    return response.data.data;
  };
}
