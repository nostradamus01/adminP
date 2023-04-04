import { defineStore } from 'pinia'

const sendRequest = async (body, url) => {
  let response = [];
  try {
    const request = await fetch('/api/apu' + (url || ''), {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await request.json();
  }
  catch (e) {}
  return response;
}

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
      const bodyObj = {
        action: 'getPlatforms',
      };
      const response = await sendRequest(bodyObj);
      if (response) {
        this.platformsArr = response;
      }
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