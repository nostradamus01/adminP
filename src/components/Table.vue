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
        <template v-for="(value, objKey) in phone">
          <td class="td" v-if="objKey !== 'id'">
            {{ value }}
          </td>
        </template>
        <td class="td">
          <div class="edit-exit">
            <button class="edit" @click="() => { editHandler(phone.id) }">
              <Edit />
            </button>
            <button class="remove" :class="phone.id" @click="() => { removeHandler(phone.id) }">
              <Exit />
            </button>
          </div>
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
});

const emits = defineEmits(['remove', 'edit']);

const removeHandler = (id) => {
  emits('remove', id)
}

const editHandler = (id) => {
  emits('edit', id)
}

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

.edit,
.remove {
  flex: 1;
  background: none;
  border: none;
  cursor: pointer;
}

.edit svg,
.remove svg {
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