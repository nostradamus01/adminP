<template>
  <Table :dataMobile="dataMobile" :tableHead="tableHead"></Table>
</template>

<script>
import Table from '@/components/Table.vue';

export default {
  components: {
    Table
  },
  data() {
    return {
      tableHead: ['ID', 'Model', 'Date', 'Price'],
      dataMobile: []
    }
  }
}
</script>