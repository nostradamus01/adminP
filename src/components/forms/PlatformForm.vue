<template>
  <div class="form-cont">
    <form class="phones" @submit.prevent="sendData">
      <input v-model="platform.chipset" class="input" placeholder="Chipset" type="text">
      <input v-model="platform.cpu" class="input" placeholder="CPU" type="text">
      <input v-model="platform.gpu" class="input" placeholder="GPU" type="text">
      <button class="button" type="submit">SEND</button>
      <div class="error">{{ errorMsg }}</div>
    </form>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import { usePlatforms } from '@/use/usePlatforms.js';

const platforms = usePlatforms();

const errorMsg = ref('');
const platform = reactive({
  chipset: '',
  cpu: '',
  gpu: ''
});

const sendData = async () => {
  errorMsg.value = '';
  if (platform.chipset.trim() === '' || platform.cpu.trim() === '' || platform.gpu.trim() === '') {
    errorMsg.value = 'Some of these fields are empty';
  } else {
    await platforms.addPlatform(platform, true);
  }
}

onMounted(async () => {
  
})
</script>

<style>
.error {
  margin-top: 20px;
}
</style>