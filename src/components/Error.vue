<script setup>
import { useServerStore } from '@/store/server';
const serverStore = useServerStore();
</script>

<template>
  <div v-if="serverStore.isErrorVisible">
    <div class="modal-error">
      <div class="error-cont">
        <h1>Error</h1>
        <div class="error-msg">{{ serverStore.errorMsg }}</div>
        <button @click="() => {serverStore.setErrorVisible(false)}">Close</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.modal-error {
  display: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  place-items: center;
  background-color: #00000063;
  font-family: Arial, Helvetica, sans-serif;

  .error-cont {
    padding: 30px;
    background-color: #ffffff;
    font-size: 20px;

    .error-msg {
      margin-top: 20px;
    }

    button {
      background: #e78b8b;
      border: none;
      border-radius: 6px;
      margin-top: 20px;
      padding: 10px;
    }
  }
}


</style>