<template>
    <div class="table-cont" :class="{ loading: isLoading }">
    <div class="loader-cont">
      <div class="loader"></div>
    </div>
    <Table :dataMobile="dataMobile" :tableHead="tableHead"></Table>
  </div>
</template>

<script>
import Table from '@/components/Table.vue';

export default {
    components: {
    Table
  },
  data() {
    return {
      tableHead: ['ID', 'Color', 'Color HEX'],
      dataMobile: []
    }
  } 
}
</script>