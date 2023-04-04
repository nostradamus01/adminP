<template>
  <div class="table-cont" :class="{ loading: categoriesStore.isLoading }">
    <div class="loader-cont">
      <div class="loader"></div>
    </div>
    <table class="table">
      <tr class="head-tr">
        <td class="td" v-for="head in tableHead">
          {{ head }}
        </td>
      </tr>
      <tr class="tr" v-for="phone in dataMobile">
        <td class="td" v-for="(value) in phone">
          {{ value }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { useCategoriesStore } from '@/store/categoriesStore';

export default {
  setup() {
    const categoriesStore = useCategoriesStore();

    return { categoriesStore }
  },
  props: {
    tableHead: {
      type: Array,
      required: true
    },
    dataMobile: {
      type: Array
    }
  }
}
</script>

<style>
.table-cont {
  position: relative;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.table-cont.loading .loader-cont {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffffa1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
  display: none;
}

.table-cont.loading .loader {
  display: block;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.table {
  table-layout: fixed;
  border-collapse: collapse;
  width: 75%;
  border: 2px ridge black;
}

.head-tr {
  border-bottom: 1px solid black;
}

.td {
  text-align: center;
  padding: 10px;
  border-right: 1px solid black;
}
</style>