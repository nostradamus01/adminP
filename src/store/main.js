import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const isPopupVisible = ref(false);
  const showPopup = (show) => {
    isPopupVisible.value = !!show;
    document.body.style.overflow = show ? 'hidden' : 'auto';
  }

  const activeCategoryForm = ref('');
  const setActiveCategory = (category) => {
    activeCategoryForm.value = category;
  }

  const isErrorVisible = ref(false);
  const errorMsg = ref('');
  const showError = (error) => {
    isErrorVisible.value = true;
    errorMsg.value = error.message;
  }
  const hideError = () => {
    isErrorVisible.value = false;
  }

  const isFormLoading = ref(false);
  const setFormLoading = (loading) => {
    isFormLoading.value = !!loading;
  }

  const isTableLoading = ref(false);
  const setTableLoading = (loading) => {
    isTableLoading.value = !!loading;
  }
  
  return {
    isPopupVisible,
    showPopup,
    activeCategoryForm,
    setActiveCategory,
    isErrorVisible,
    errorMsg,
    showError,
    hideError,
    isFormLoading,
    setFormLoading,
    isTableLoading,
    setTableLoading
  }
});