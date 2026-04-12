import { create } from "zustand";
import { ProductsService } from "../services/products.service";

const useProductStore = create((set) => ({
  products: [],
  loading: false,

  getProducts: async () => {
    const Service = new ProductsService();
    try {
      set({ loading: true });
      const products = await Service.getAll();

      set({
        products,
      });
    } catch (error) {
      set({ products: [] });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  updateProduct: async (id, data) => {
    const Service = new ProductsService();
    try {
      set({ loading: true });
      const products = await Service.update(id, data);

      set({
        products: products.map((p) => (p.id === id ? { ...p, ...data } : p)),
      });
    } catch (error) {
      set({ products: [] });
      throw error;
    } finally {
      set({ loading: false });
    }
  },
}));

export default useProductStore;
