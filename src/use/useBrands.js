import { useServer } from "@/use/useServer";
import { useCategoriesStore } from '@/store/categories.js';

const TABLE_NAME = 'brands';
const COLUMNS = ['n', 'id', 'created_at', 'updated_at', 'name'];

export function useBrands() {
  const categoriesStore = useCategoriesStore();
  const { mainStore, supabase, showError, closeForm, setFormLoading, setTableLoading, showPopup } = useServer();

  const addBrand = async (data, reload) => {
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
      await getBrands();
    }
  }

  const removeBrand = async (brandId) => {
    setTableLoading(true);
    const { error } = await supabase
      .from(TABLE_NAME)
      .delete()
      .eq('id', brandId.toString());
    if (error) {
      showError(error);
    } else {
      getBrands()
    }
  }

  const getBrand = async (brandId) => { }

  const getBrands = async () => {
    setTableLoading(true);
    const { data, error } = await supabase.from(TABLE_NAME).select('*');
    if (error) {
      showError(error);
    } else {
      let n = 1;
      const result = [];
      data.forEach(brand => {
        const obj = {};
        COLUMNS.forEach(column => {
          obj[column] = brand[column] || '-';
        });
        obj['created_at'] = new Date(obj['created_at']).toLocaleString();
        obj['updated_at'] = new Date(obj['updated_at']).toLocaleString();
        obj.n = n;
        result.push(obj);
        n++;
      });
      categoriesStore.brands.data = result;
    }
    setTableLoading(false);
  }

  const showEditBrandForm = async (brandId) => {
    categoriesStore.selectBrandId(brandId);
    showPopup('edit');
  }

  const editBrand = async (data) => {
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
      getBrands();
    }
  }

  return {
    mainStore,
    categoriesStore,
    addBrand,
    editBrand,
    removeBrand,
    getBrand,
    getBrands,
    showEditBrandForm
  }
}
