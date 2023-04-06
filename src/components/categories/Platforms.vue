<template>
  <Table :dataMobile="dataMobile" :tableHead="tableHead" :isLoading="mainStore.isLoading"></Table>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import Table from '@/components/Table.vue';
import { useCategoriesStore } from '@/store/categories.js'
import { usePlatforms } from '@/composables/usePlatforms.js';
import { useMainStore } from '@/store/main.js';

const mainStore = useMainStore();
const categoriesStore = useCategoriesStore();
const { getPlatforms } = usePlatforms();

const dataMobile = computed(() => {return categoriesStore.platforms.data});
const tableHead = computed(() => ['N', 'Chipset', 'CPU', 'GPU', 'Cteation date', 'Update date']);

onMounted(async () => {
  const data = await getPlatforms();
  if (data.error) {
    mainStore.showError(data.error);
  }
  categoriesStore.platforms.data = data.platforms;
})
</script>