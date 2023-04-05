<template>
  <Table :dataMobile="dataMobile" :tableHead="tableHead"></Table>
</template>

<script>
import Table from '@/components/Table.vue';
import { useCategoriesStore } from '@/store/categoriesStore';

export default {
  setup() {
    const categoriesStore = useCategoriesStore();

    return { categoriesStore };
  },
  components: {
    Table
  },
  data() {
    return {
      tableHead: ['ID', 'Created date', 'Chipset', 'CPU', 'GPU']
    }
  },
  mounted() {
    this.categoriesStore.getPlatforms();
  },
  computed: {
    dataMobile() {
      return this.categoriesStore.platformsArr;
    }
  }
}
</script>