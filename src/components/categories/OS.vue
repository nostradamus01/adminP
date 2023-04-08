<template>
  <Table :dataMobile="dataMobile" :tableHead="tableHead" :isLoading="mainStore.isTableLoading" @remove="removeOsHandler"
    @edit="editOsHandler"></Table>
</template>

<script setup>
import { onMounted, computed, onUnmounted } from 'vue';
import Table from '@/components/Table.vue';
import { useOs } from '@/use/useOs.js';

const { getOses, mainStore, categoriesStore, removeOs, showEditOsForm} = useOs();

const dataMobile = computed(() => { return categoriesStore.oses.data });
const tableHead = computed(() => ['N','Created at', 'Updated at', 'Name', ])

const removeOsHandler = (osId) => {
  removeOs(osId)
}

const editOsHandler = (osId) => {
  showEditOsForm(osId)
}

onMounted(async () => {
  await getOses();
});

onUnmounted(() => {
  mainStore.setTableLoading(false);
})
</script>