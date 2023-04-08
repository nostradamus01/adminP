<template>
  <div>
    <form class="brand" @submit.prevent="sendData">
      <input v-model="name" class="input" placeholder="Name" id="name" name="name" type="text">
      <button class="button" type="submit">SEND</button>
      <div class="error">
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, toRaw } from 'vue';
import { useBrands } from '@/use/useBrands';
const { mainStore, categoriesStore, addBrand, editBrand } = useBrands();

const errorMsg = ref('');
const name = ref('');

const sendData = async () => {

  errorMsg.value = '';

  if (name.value.trim() === '') {
    errorMsg.value = 'Some of these fields are empty';
  } else {
    if (mainStore.getFormOperation() === 'add') {
      await addBrand({ name: name.value }, true);
    } else {
      const brandData = { name: name.value };
      brandData.id = categoriesStore.getSelectedBrandId;
      await editBrand(brandData);
    }
  }
  categoriesStore.selectBrandId(null);
}


onMounted(async () => {
  const brandId = categoriesStore.getSelectedBrandId;
  const brandsData = toRaw(categoriesStore.brands).data;
  if (brandId !== null) {
    const selectedBrand = brandsData.find(brand => brand.id === brandId);
    console.log(selectedBrand);
    name.value = selectedBrand.name || '';
  }
})
</script>

<style lang="scss" scoped></style>