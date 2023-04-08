<template>
    <Table :dataMobile="dataMobile" :tableHead="tableHead" :isLoading="mainStore.isTableLoading" @remove="removeBrandHandler"
    @edit="editBrandHandler"></Table>
</template>

<script setup>
import { onMounted, computed, onUnmounted } from 'vue';
import Table from '@/components/Table.vue';
import { useBrands } from '@/use/useBrands.js';

const { getBrands, mainStore, categoriesStore, removeBrand, showEditBrandForm} = useBrands();

const dataMobile = computed(() => { return categoriesStore.brands.data });
const tableHead = computed(() => ['N','Created at', 'Updated at', 'Name', ])

const removeBrandHandler = (brandId) => {
  removeBrand(brandId)
}

const editBrandHandler = (brandId) => {
  console.log('id', brandId);
  showEditBrandForm(brandId)
}

onMounted(async () => {
  await getBrands();
});

onUnmounted(() => {
  mainStore.setTableLoading(false);
})
</script>