import { useSupabase } from "@/composables/useServer";

export function usePlatforms() {
  const TABLE_NAME = 'platforms';
  const COLUMNS = ['n', 'chipset', 'cpu', 'gpu', 'created_at', 'updated_at']; 

  const { supabase } = useSupabase();

  const addPlatform = async (data) => {
    const dateNow = new Date();
    const options = {
      chipset: data.chipset,
      cpu: data.cpu,
      gpu: data.gpu,
      updated_at: dateNow
    }

    const { error } = await supabase.from(TABLE_NAME).insert(options);
    return {
      error
    }
  }

  const editPlatform = async (data) => { }

  const removePlatforms = async (data) => { }

  const getPlatform = async (platformId) => { }
  
  const getPlatforms = async () => {
    const { data, error } = await supabase.from(TABLE_NAME).select('*');
    if (error) {
      return {
        error
      };
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
      return {
        platforms: result
      };
    }
  }

  return {
    TABLE_NAME,
    COLUMNS,
    addPlatform,
    editPlatform,
    removePlatforms,
    getPlatform,
    getPlatforms
  }
}