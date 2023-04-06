<template>
  <Table :dataMobile="dataMobile" :tableHead="tableHead" :isLoading="serverStore.isLoading"></Table>
</template>

<script setup>
import Table from '@/components/Table.vue';
import { useServerStore } from '@/store/server';
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';

const serverStore = useServerStore();

const dataMobile = computed(() => {return serverStore.platforms.data});
const tableHead = computed(() => ['ID', 'Creation Date', 'Chipset', 'CPU', 'GPU']);

onMounted(async () => {
  console.log(serverStore.isLoading.value);
  serverStore.getPlatforms();
})
</script>