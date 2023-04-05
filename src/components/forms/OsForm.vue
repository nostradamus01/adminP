<template>
  <div>
    <form class="os" @submit.prevent="sendData">
      <input v-model="name" class="input" placeholder="Name" id="name" name="name" type="text">
      <button class="button" type="submit">SEND</button>
      <div class="error">
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMainStore } from '@/store/mainStore';
const mainStore = useMainStore();
const name = ref('');
const sendData = () => {
  mainStore.showPopup(false);
}
</script>

<style lang="scss" scoped></style>