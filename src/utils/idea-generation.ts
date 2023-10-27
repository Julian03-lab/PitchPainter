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

type userState = {
  user: string;
  setUser: (user: string) => void;
  guessed: boolean;
  setGuessed: (guessed: boolean) => void;
  points: number;
  setPoints: (points: number) => void;
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

export const useUserStore = create<userState>()((set) => ({
  user: "",
  setUser: (user: string) => set({ user }),
  guessed: false,
  setGuessed: (guessed: boolean) => set({ guessed }),
  points: 0,
  setPoints: (points: number) => set({ points }),
}));
