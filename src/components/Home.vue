<script setup>
import { useMainStore } from '@/store/main.js';
import Header from '@/components/Header.vue';

const mainStore = useMainStore();
const showPopup = () => {
  mainStore.showPopup(true);
}
</script>

<template>
  <Header></Header>
  <div class="add">
    <button class="addbtn" @click="showPopup">Add</button>
  </div>
  <router-view></router-view>
</template>

<style>
.add {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.add button {
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  font-weight: 900;
  background-color: #bca4a4;
  font-size: 16px;
  margin-right: 20px;
}

.add button:hover {
  background-color: #8b7575;
}
</style>