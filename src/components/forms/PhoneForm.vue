<template>
  <div class="form-cont">
    <form class="phones" @submit.prevent>
      <select name="brand_id" id="brand_id">
        <option value="0" disabled selected hidden>Brand</option>
        <option v-for="brand in data.brands" :key="brand.id" :value="brand.id">{{ brand.name }}</option>
      </select>
      <input class="input" placeholder="Model" id="model" name="model" type="text">
      <input class="input" placeholder="Released Date" id="releasedate" name="releasedate" type="date">
      <select name="os_id" id="os_id">
        <option value="0" disabled selected hidden>OS</option>
        <option v-for="os in data.os" :key="os.id" :value="os.id">{{ os.name }}</option>
      </select>
      <select name="platform_id" id="platform_id">
        <option value="0" disabled selected hidden>Platform</option>
        <option v-for="platform in data.platforms" :key="platform.id" :value="platform.id">{{ platform.name }}</option>
      </select>
      <div class="dimensions">
        <input class="input" placeholder="Height" id="height" name="height" type="text">
        <input class="input" placeholder="Width" id="width" name="width" type="text">
        <input class="input" placeholder="Depth" id="depth" name="depth" type="text">
      </div>
      <input class="input" placeholder="Weight" id="weight" name="weight" type="number">
      <input class="input" placeholder="Price" id="price" name="price" type="number">
      <input class="input" placeholder="Discount" id="discount" name="discount" type="number">
      <input class="input" placeholder="Battery Capacity" id="battery_capacity" name="battery_capacity" type="text">
      <input class="input" placeholder="Size" id="screen_size" name="screen_size" type="text">
      <button class="button" type="submit">SEND</button>
      <div class="error">
      </div>
    </form>
  </div>
</template>

<script setup>
import { usePhones } from '@/use/usePhones.js';
import { onMounted, reactive } from 'vue';

const { loadPlatforms } = usePhones();

const data = reactive({
  platforms: [],
  os: [],
  brands: []
});

onMounted(async () => {
  data.platforms = await loadPlatforms();
});

</script>

<style></style>