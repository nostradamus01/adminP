<script setup>
import { useMainStore } from '@/store/main';
const mainStore = useMainStore();
</script>

<template>
  <Transition name="modal">
    <div class="modal-error" v-if="mainStore.isErrorVisible">
      <div class="error-cont">
        <h1>Error</h1>
        <div class="error-msg">{{ mainStore.errorMsg }}</div>
        <button @click="mainStore.hideError">Close</button>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss">
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-error {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
      cursor: pointer;

      &:hover {
        background-color: #e47474;
      }
    }
  }
}
</style>