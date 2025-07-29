import { createStore } from "zustand/vanilla";

export interface CountState {
  count: number;
  increaseCount: () => void;
}

const countStore = createStore<CountState>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
}));


export default countStore;
