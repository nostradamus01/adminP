import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    selectedPlatformId: null,
    platforms: {
      data: [],
      count: null
    }
  }),
  getters: {
    getSelectedPlatformId: (state) => state.selectedPlatformId,
    getPlatformsArray: (state) => state.platforms.data
  },
  actions: {
    selectPlatformId(id) {
      this.selectedPlatformId = id;
    }
  }
});