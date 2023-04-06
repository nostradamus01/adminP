import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useCategoriesStore = defineStore('categories', () => {
  const platforms = reactive({
    data: []
  });
  
  return {
    platforms
  }
});