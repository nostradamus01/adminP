import { defineStore } from 'pinia'
import { createClient } from "@supabase/supabase-js";

const { VITE_SUPABASE_URL, VITE_SUPABASE_KEY } = import.meta.env;
const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);

export const useCategoriesStore = defineStore('categoriesStore', {
  state: () => ({
    isLoading: false,
    platformsArr: [],
    phonesArr: [],
  }),
  actions: {
    setIsLoading(loading) {
      this.isLoading = loading;
    },
    async getPlatforms() {
      this.setIsLoading(true);
      let { data: platforms, error } = await supabase
      .from('platforms')
      .select('*');
      platforms.forEach((platform) => {
        platform.created_at = new Date(platform.created_at).toLocaleString();
      })
      this.platformsArr = platforms;
      this.setIsLoading(false);
    },
    async getPhones() {
      this.setIsLoading(true);
      const bodyObj = {
        action: 'getPhones',
      };
      const response = await sendRequest(bodyObj);
      if (response) {
        this.phonesArr = response;
      }
    
      this.setIsLoading(false);
    }
  }
});