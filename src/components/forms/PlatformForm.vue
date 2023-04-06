<template>
  <div>
    <form class="phones" @submit.prevent="sendData">
      <input v-model="platform.chipset" class="input" placeholder="Chipset" id="chipset" name="chipset" type="text">
      <input v-model="platform.cpu" class="input" placeholder="CPU" id="cpu" name="cpu" type="text">
      <input v-model="platform.gpu" class="input" placeholder="GPU" id="gpu" name="gpu" type="text">
      <button class="button" type="submit">SEND</button>
      <div class="error">
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { usePlatforms } from '@/use/usePlatforms.js';

const platforms = usePlatforms();

const platform = reactive({
  chipset: '',
  cpu: '',
  gpu: ''
});

const sendData = async () => {
  await platforms.addPlatform(platform, true);
}
</script>

<style></style>