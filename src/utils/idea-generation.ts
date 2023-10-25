import { create } from "zustand";

type SelectedWordsState = {
  selectedWord: string;
  setSelectedWord: (selectedWord: string) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

type DrawColorState = {
  drawColor: string;
  setDrawColor: (drawColor: string) => void;
};

type TimerState = {
  timerFinished: boolean;
  setTimerFinished: (timerFinished: boolean) => void;
};

export const useWordStore = create<SelectedWordsState>()((set) => ({
  selectedWord: "",
  setSelectedWord: (selectedWord: string) => set({ selectedWord }),
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

export const useDrawColorStore = create<DrawColorState>()((set) => ({
  drawColor: "#000",
  setDrawColor: (drawColor: string) => set({ drawColor }),
}));

export const useTimerStore = create<TimerState>()((set) => ({
  timerFinished: false,
  setTimerFinished: (timerFinished: boolean) => set({ timerFinished }),
}));
