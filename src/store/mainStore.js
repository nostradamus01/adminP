import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    isPopupVisible: false,
    activeCategoryForm: ''
  }),
  actions: {
    setPhoneName(name) {
      this.phones[0].name = name;
    },
    showPopup(visible) {
      this.isPopupVisible = visible;
    },
    setActiveCategory(cat) {
      this.activeCategoryForm = cat;
    }
  }
});