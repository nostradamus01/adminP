import { useServer } from "@/use/useServer";
import { useCategoriesStore } from '@/store/categories.js'

const TABLE_NAME = 'phones';
const COLUMNS = ['n', 'chipset', 'cpu', 'gpu', 'created_at', 'updated_at']; 

export function usePhones() {
  const categoriesStore = useCategoriesStore();
  const { mainStore, supabase, showError, closeForm, setFormLoading, setTableLoading } = useServer();

  const addPhone = async (data, reload) => { }

  const editPhone = async (data) => { }

  const removePhones = async (data) => { }

  const getPhone = async (platformId) => { }
  
  const getPhones = async () => { }

  const loadPlatforms = async () => {
    setFormLoading(true);
    const platforms = await supabase.from('platforms').select('*');
    setFormLoading(false);
    if (platforms.error) {
      showError(platforms.error)
    } else {
      const platformsArr = [];
      platforms.data.forEach(platform => {
        const obj = {};
        obj.id = platform.id,
        obj.name = platform.chipset,
        platformsArr.push(obj);
      });
      return platformsArr;
    }
    return [];
  }

  return {
    mainStore,
    categoriesStore,
    loadPlatforms,
  }
}