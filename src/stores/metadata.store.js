import { create } from "zustand";
import { MetadataService } from "../services/metadata.service";

const useMetadataStore = create((set) => ({
  languages: [],
  currentLanguage: {},
  loading: false,

  setCurrentLanguage: (language) => {
    set({
      currentLanguage: language,
    });
  },

  getLanguages: async () => {
    const Service = new MetadataService();
    try {
      set({ loading: true });
      const languages = await Service.getAll();

      set({
        languages,
        currentLanguage: languages[0],
      });
    } catch (error) {
      set({ languages: [], currentLanguage: {} });
      throw error;
    } finally {
      set({ loading: false });
    }
  },
}));

export default useMetadataStore;
