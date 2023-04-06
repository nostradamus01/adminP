<template>
  <div class="table-cont" :class="{ loading: isLoading }">
    <div class="loader-cont">
      <div class="loader"></div>
    </div>
    <table class="table">
      <tr class="head-tr">
        <td class="td" v-for="head in tableHead" :key="head">
          {{ head }}
        </td>
      </tr>
      <tr class="tr" v-for="phone in dataMobile" :key="phone.id">
        <td class="td" v-for="(value) in phone">
          {{ value }}
        </td>
        <td class="edit-exit">
          <button class="edit"><Edit/></button>
          <button class="exit"><Exit/></button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import Edit from './icons/Edit.vue';
import Exit from './icons/Exit.vue';

const { isLoading, tableHead, dataMobile } = defineProps({
  isLoading: Boolean,
  tableHead: Array,
  dataMobile: Array
})
</script>

<style>
.table-cont {
  position: relative;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 30px;
}

.edit-exit {
  display: flex;
  height: 40px;
  gap: 10px;
}

.edit, .exit {
  flex: 1;
  background: none;
  border: none;
  cursor: pointer;
}

.edit svg, .exit svg {
  height: 30px;
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
  z-index: 6;
}

.table-cont.loading .loader {
  display: block;
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