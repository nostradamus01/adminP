import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js';

const { VITE_SUPABASE_URL, VITE_SUPABASE_KEY } = import.meta.env;
const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);

const insert = async (tableName, options) => {
  return await supabase
    .from(tableName)
    .insert(options);
}

const getData = async (tableName) => {
  return await supabase
    .from(tableName)
    .select('*');
}

const getSingleData = async (tableName, options) => {
  return await supabase
    .from(tableName)
    .select(options);
}

export const useServerStore = defineStore('server', () => {
  // Global
  const isLoading = ref(false);
  const setLoading = (loading) => {
    isLoading.value = !!loading;
  }

  const isErrorVisible = ref(false);
  const errorMsg = ref('');
  const showError = (error) => {
    isErrorVisible.value = true;
    errorMsg.value = error.message;
  }
  const setErrorVisible = (visible) => {
    isErrorVisible.value = !!visible;
  }

  // Platforms
  const platforms = reactive({
    data: []
  });

  const getPlatforms = async () => {
    setLoading(true);
    const { data, error } = await getData('platforms');
    if (error) {
      showError(error);
    } else {
      data.forEach((platform) => {
        platform.created_at = new Date(platform.created_at).toLocaleString();
      });
      platforms.data = data;
    }
    setLoading(false);
  }

  const addPlatform = async (platform) => {
    const { error } = await insert('platforms', {
      chipset: platform.chipset,
      cpu: platform.cpu,
      gpu: platform.gpu
    });
    if (error) {
      showError(error);
    }
  }

  return {
    isLoading,
    setLoading,
    isErrorVisible,
    errorMsg,
    showError,
    setErrorVisible,
    platforms,
    getPlatforms,
    addPlatform
  }
});