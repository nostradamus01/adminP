import { useServer } from "@/use/useServer";
import { useCategoriesStore } from '@/store/categories.js'

const TABLE_NAME = 'phones';
const COLUMNS = ['n', 'chipset', 'cpu', 'gpu', 'created_at', 'updated_at'];

export function usePhones() {
  const categoriesStore = useCategoriesStore();
  const { mainStore, supabase, showError, closeForm, setFormLoading, setTableLoading } = useServer();

  const addPhone = async (data, reload) => {
    setFormLoading(true);
    // const dateNow = new Date();
    data.updated_at = new Date();
    // const options = {
    //   brandId: data.brandId,
    //   model: data.model,
    //   releasedate: data.releasedate,
    //   osId: data.osId,
    //   platformId: data.platformId,
    //   height: data.height,
    //   width: data.width,
    //   depth: data.depth,
    //   weight: data.weight,
    //   price: data.price,
    //   width: data.width,
    //   updated_at: dateNow
    // }
    console.log(data);
    const { error } = await supabase.from(TABLE_NAME).insert(data);
    setFormLoading(false);
    closeForm();
    if (error) {
      showError(error);
    } else if (reload) {
      await getPlatforms();
    }
  }

  const editPhone = async (data) => { }

  const removePhone = async (data) => { }

  const getPhone = async (platformId) => { }

  const getPhones = async () => { }

  const loadPlatforms = async (tableName) => {
    setFormLoading(true);
    const platforms = await supabase.from(tableName).select('*');
    setFormLoading(false);
    if (platforms.error) {
      showError(platforms.error)
    } else {
      const platformsArr = [];
      platforms.data.forEach(platform => {
        const obj = {};
        obj.id = platform.id,
          obj.name = platform.chipset || platform.name,
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
    addPhone
  }
}