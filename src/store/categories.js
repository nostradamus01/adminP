import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    selectedPlatformId: null,
    platforms: {
      data: [],
      count: null
    },
    selectedOsId: null,
    oses: {
      data: [],
      count: null
    }
  }),
  getters: {
    getSelectedPlatformId: (state) => state.selectedPlatformId,
    getPlatformsArray: (state) => state.platforms.data,
    getSelectedOsId: (state) => state.selectedOsId,
    getOsesArray: (state) => state.oses.data,

  },
  actions: {
    selectPlatformId(id) {
      this.selectedPlatformId = id;
    },
    selectOsId(id) {
      this.selectedOsId = id;
    }
  }
});