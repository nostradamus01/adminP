import { createClient } from '@supabase/supabase-js';
import { useMainStore } from '@/store/main.js';

const { VITE_SUPABASE_URL, VITE_SUPABASE_KEY } = import.meta.env;

export function useServer() {
  const mainStore = useMainStore();

  const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);

  const showError = (error) => {
    mainStore.showError(error);
  }

  const closeForm = () => {
    mainStore.showPopup(false);
  }

  const setFormLoading = (loading) => {
    mainStore.setFormLoading(loading);
  }

  const setTableLoading = (loading) => {
    mainStore.setTableLoading(loading);
  }

  const showPopup = (operation) => {
    mainStore.showPopup(true, operation);
  }

  return {
    mainStore,
    supabase,
    showError,
    closeForm,
    setFormLoading,
    setTableLoading,
    showPopup
  }
}