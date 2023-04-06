<template>
  <Table :dataMobile="dataMobile" :tableHead="tableHead" :isLoading="mainStore.isTableLoading" @remove="removePlatformHandler"
    @edit="editPlatformHandler"></Table>
</template>

<script setup>
import { onMounted, computed, onUnmounted } from 'vue';
import Table from '@/components/Table.vue';
import { usePlatforms } from '@/use/usePlatforms.js';

const { getPlatforms, mainStore, categoriesStore, removePlatform, editPlatform } = usePlatforms();

const dataMobile = computed(() => { return categoriesStore.platforms.data });
const tableHead = computed(() => ['N', 'Chipset', 'CPU', 'GPU', 'Cteation date', 'Update date'])

const removePlatformHandler = (platformId) => {
  removePlatform(platformId)
}

const editPlatformHandler = (platformId) => {
  editPlatform(platformId)
}

onMounted(async () => {
  await getPlatforms();
});

onUnmounted(() => {
  mainStore.setTableLoading(false);
})
</script>