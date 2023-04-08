import { useServer } from "@/use/useServer";
import { useCategoriesStore } from '@/store/categories.js';

const TABLE_NAME = 'os';
const COLUMNS = ['n', 'id', 'created_at', 'updated_at', 'name'];

export function useOs() {
  const categoriesStore = useCategoriesStore();
  const { mainStore, supabase, showError, closeForm, setFormLoading, setTableLoading, showPopup } = useServer();

  const addOs = async (data, reload) => {
    console.log(data);
    setFormLoading(true);
    const dateNow = new Date();
    const options = {
      name: data.name,
      updated_at: dateNow
    }

    const { error } = await supabase.from(TABLE_NAME).insert(options);
    setFormLoading(false);
    closeForm();
    if (error) {
      showError(error);
    } else if (reload) {
      await getOses();
    }
  }

  const removeOs = async (osId) => {
    setTableLoading(true);
    const { error } = await supabase
      .from(TABLE_NAME)
      .delete()
      .eq('id', osId.toString());
    if (error) {
      showError(error);
    } else {
      getOses()
    }
  }

  const getOs = async (osId) => { }

  const getOses = async () => {
    setTableLoading(true);
    const { data, error } = await supabase.from(TABLE_NAME).select('*');
    if (error) {
      showError(error);
    } else {
      let n = 1;
      const result = [];
      data.forEach(os => {
        const obj = {};
        COLUMNS.forEach(column => {
          obj[column] = os[column] || '-';
        });
        obj['created_at'] = new Date(obj['created_at']).toLocaleString();
        obj['updated_at'] = new Date(obj['updated_at']).toLocaleString();
        obj.n = n;
        result.push(obj);
        n++;
      });
      categoriesStore.oses.data = result;
    }
    setTableLoading(false);
  }

  const showEditOsForm = async (osId) => {
    categoriesStore.selectOsId(osId);
    showPopup('edit');
  }

  const editOs = async (data) => {
    setFormLoading(true);
    const dateNow = new Date();
    const { error } = await supabase
      .from(TABLE_NAME)
      .update({
        name: data.name,
        updated_at: dateNow
      })
      .eq('id', data.id);
    setFormLoading(false);
    closeForm();
    if (error) {
      showError(error);
    } else {
      getOses();
    }
  }

  return {
    mainStore,
    categoriesStore,
    addOs,
    editOs,
    removeOs,
    getOs,
    getOses,
    showEditOsForm
  }
}
