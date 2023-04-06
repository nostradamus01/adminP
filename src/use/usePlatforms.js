import { useServer } from "@/use/useServer";
import { useCategoriesStore } from '@/store/categories.js'

const TABLE_NAME = 'platforms';
const COLUMNS = ['n', 'chipset', 'cpu', 'gpu', 'created_at', 'updated_at']; 

export function usePlatforms() {
  const categoriesStore = useCategoriesStore();
  const { mainStore, supabase, showError, closeForm, setFormLoading, setTableLoading } = useServer();

  const addPlatform = async (data, reload) => {
    setFormLoading(true);
    const dateNow = new Date();
    const options = {
      chipset: data.chipset,
      cpu: data.cpu,
      gpu: data.gpu,
      updated_at: dateNow
    }

    const { error } = await supabase.from(TABLE_NAME).insert(options);
    setFormLoading(false);
    closeForm();
    if (error) {
      showError(error);
    } else if (reload) {
      await getPlatforms();
    }
  }

  const editPlatform = async (data) => { }

  const removePlatforms = async (data) => { }

  const getPlatform = async (platformId) => { }
  
  const getPlatforms = async () => {
    setTableLoading(true);
    const { data, error } = await supabase.from(TABLE_NAME).select('*');
    if (error) {
      showError(error);
    } else {
      let n = 1;
      const result = [];
      data.forEach(platform => {
        const obj = {};
        COLUMNS.forEach(column => {
          obj[column] = platform[column] || '-';
        });
        obj['created_at'] = new Date(obj['created_at']).toLocaleString();
        obj['updated_at'] = new Date(obj['updated_at']).toLocaleString();
        obj.n = n;
        result.push(obj);
        n++;
      });
      categoriesStore.platforms.data = result;
    }
    setTableLoading(false);
  }

  return {
    mainStore,
    categoriesStore,
    addPlatform,
    editPlatform,
    removePlatforms,
    getPlatform,
    getPlatforms
  }
}