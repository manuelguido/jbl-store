import { defineStore } from 'pinia'

export const useOptionsStore = defineStore('options', {
  state: () => (
    {
      fullSize: false as boolean,
    }
  ),

  getters: {
    getFullSize: (state) => state.fullSize,
  },

  actions: {
    toggleSize() {
      this.fullSize = !this.fullSize
    },
  },
});
