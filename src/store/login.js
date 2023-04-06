import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => ({
    isLogined: false,
    isLoading: false
  }),
  actions: {
    setLogined: (isLogined) => {
      this.isLogined = isLogined;
    },
    setLoading(isLoading) {
      this.isLoading = isLoading;
    }
  }
});