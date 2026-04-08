import { create } from "zustand";
import { AuthService } from "../services/auth.service";

const useAuthStore = create((set, get) => ({
  user: null,
  authenticated: false,
  loading: false,

  applySession: ({ usuario }) => {
    set({
      usuario,
      authenticated: true,
      loading: false,
    });
  },

  clearSession: () => {
    set({
      usuario: null,
      authenticated: false,
      loading: false,
    });
  },

  login: async (email, password) => {
    const { applySession, clearSession } = get();
    const Service = new AuthService();

    try {
      set({ loading: true });
      const response = await Service.login(email, password);
      const user = response.user;

      applySession({ user });
    } catch (error) {
      clearSession();
      throw error;
    }
  },

  logout: async () => {
    const { clearSession } = get();
    const Service = new AuthService();

    try {
      set({ loading: true });
      const response = await Service.logout();
      return response;
    } finally {
      clearSession();
    }
  },
}));

export default useAuthStore;
