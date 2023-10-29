import { create } from "zustand";
import { getAllPokemon } from "../api/characters";

export const useUsersStore = create((set, get) => ({
  data: [],
  isLoading: false,
  error: null,
  getAllCharacters: async () => {
    try {
      set({ isLoading: true });
      const response = await getAllPokemon();
      console.log(response);
      set({ isLoading: false, data: response.data });
    } catch (err) {
      console.log(err);
      set({ error: err.message, isLoading: false });
    }
  },
  //   createUser: async (name) => {
  //     try {
  //       set({ isLoading: true });
  //       const response = await createUser(name);
  //       const updatedData = [...get().data, response.data];
  //       set({ isLoading: false, data: updatedData });
  //       // set((state) => ({
  //       //   isLoading: false,
  //       //   data: [...state.data, response.data],
  //       // }));
  //     } catch (err) {
  //       set({ error: err.message, isLoading: false });
  //     }
  //   },
}));
