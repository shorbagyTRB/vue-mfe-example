import { defineStore } from "pinia";

export const countStore = defineStore("count", {
  state: () => ({
    count: 0,
  }),
});
