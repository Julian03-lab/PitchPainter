import { create } from "zustand";

type SelectedWordsState = {
  selectedWord: string;
  setSelectedWord: (selectedWord: string) => void;
};

export const useWordStore = create<SelectedWordsState>()((set) => ({
  selectedWord: "",
  setSelectedWord: (selectedWord: string) => set({ selectedWord }),
}));
