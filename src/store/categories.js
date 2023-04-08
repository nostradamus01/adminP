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
    },
    selectedBrandId: null,
    brands: {
      data: [],
      count: null
    }
  }),
  getters: {
    getSelectedPlatformId: (state) => state.selectedPlatformId,
    getPlatformsArray: (state) => state.platforms.data,
    getSelectedOsId: (state) => state.selectedOsId,
    getOsesArray: (state) => state.oses.data,
    getSelectedBrandId: (state) => state.selectedBrandId,
    getBrandsArray: (state) => state.brands.data,
  },
  actions: {
    selectPlatformId(id) {
      this.selectedPlatformId = id;
    },
    selectOsId(id) {
      this.selectedOsId = id;
    },
    selectBrandId(id) {
      this.selectedBrandId = id;
    },
    resetAllIds() {
      this.selectedPlatformId = null;
      this.selectedOsId = null;
      this.selectedBrandId = null;
    }
  }
});