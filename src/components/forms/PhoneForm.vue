<template>
  <div class="form-cont">
    <form class="phones" @submit.prevent="sendData">
      <select v-model="phone.brand_id" name="brand_id" id="brand_id">
        <option  value="0" disabled selected hidden>Brand</option>
        <option v-for="brand in data.brands" :key="brand.id" :value="brand.id">{{ brand.name }}</option>
      </select>
      <input v-model="phone.model" class="input" placeholder="Model" id="model" name="model" type="text">
      <input v-model="phone.released_date" class="input" placeholder="Released Date" id="releasedate" name="releasedate" type="date">
      <select v-model="phone.os_id" name="os_id" id="os_id">
        <option value="0" disabled selected hidden>OS</option>
        <option v-for="os in data.os" :key="os.id" :value="os.id">{{ os.name }}</option>
      </select>
      <select v-model="phone.platform_id" name="platform_id" id="platform_id">
        <option value="0" disabled selected hidden>Platform</option>
        <option v-for="platform in data.platforms" :key="platform.id" :value="platform.id">{{ platform.name }}</option>
      </select>
      <div class="dimensions">
        <input v-model="phone.height" class="input" placeholder="Height" id="height" name="height" type="text">
        <input v-model="phone.width" class="input" placeholder="Width" id="width" name="width" type="text">
        <input v-model="phone.depth" class="input" placeholder="Depth" id="depth" name="depth" type="text">
      </div>
      <input v-model="phone.weight" class="input" placeholder="Weight" id="weight" name="weight" type="number">
      <input v-model="phone.price" class="input" placeholder="Price" id="price" name="price" type="number">
      <input v-model="phone.discount" class="input" placeholder="Discount" id="discount" name="discount" type="number">
      <input v-model="phone.battery_capacity" class="input" placeholder="Battery Capacity" id="battery_capacity" name="battery_capacity" type="text">
      <input v-model="phone.screen_size" class="input" placeholder="Size" id="screen_size" name="screen_size" type="text">
      <button class="button" type="submit">SEND</button>
      <div class="error">
      </div>
    </form>
  </div>
</template>

<script setup>
import { usePhones } from '@/use/usePhones.js';
import { onMounted, reactive, toRaw } from 'vue';

const { addPhone } = usePhones();

const data = reactive({
  platforms: [],
  os: [],
  brands: []
});

const phone = reactive({
  brand_id: 0,
  model: '',
  released_date: '',
  os_id: 0,
  platform_id: 0,
  height: '',
  width: '',
  depth: '',
  weight: '',
  price: '',
  discount: '',
  battery_capacity: '',
  screen_size: ''
})

// const sendData = async () => {
  
//   errorMsg.value = '';
  
//   if (phone.brandId.trim() === '' || phone.model.trim() === '' || phone.releasedate.trim() === '' || phone.osId.trim() === ''
//   || phone.platformId.trim() === '' || phone.height.trim() === '') {
//     errorMsg.value = 'Some of these fields are empty';
//   } else {
//     if (mainStore.getFormOperation() === 'add') {
//       await addPlatform(platform, true);
//     } else {
//       const platformData = toRaw(platform);
//       platformData.id = categoriesStore.getSelectedPlatformId;
//       await editPlatform(platformData);
//     }
//   }
//   categoriesStore.selectPlatformId(null);
// }

const sendData =  async () => {
  const data = toRaw(phone);
  data.brand_id = parseInt(data.brand_id) || null;
  data.os_id = parseInt(data.os_id) || null;
  data.platform_id = parseInt(data.platform_id) || null;
  data.height = parseFloat(data.height) || null;
  data.price = parseFloat(data.price) || null;
  data.width = parseFloat(data.width) || null;
  data.depth = parseFloat(data.depth) || null;
  data.weight = parseFloat(data.weight) || null;
  data.discount = parseFloat(data.discount) || null;
  data.battery_capacity = parseFloat(data.battery_capacity) || null;
  data.screen_size = parseFloat(data.screen_size) || null;
  data.released_date = data.released_date ? new Date(data.released_date) : null;
  console.log(data);
  await addPhone(data);
}

// const platformsData = toRaw(categoriesStore.platforms).data;

// onMounted(async () => {
//   const platformId = categoriesStore.getSelectedPlatformId;
//   if (platformId !== null) {
//     const selectedPlatform = platformsData.find(platform => platform.id === platformId);
//     console.log(selectedPlatform);
//     platform.chipset = selectedPlatform.chipset || '';
//     platform.cpu = selectedPlatform.cpu || '';
//     platform.gpu = selectedPlatform.gpu || '';
//   }
// })

// onMounted(async () => {
//   data.platforms = await loadPlatforms('platforms');
//   data.os = await loadPlatforms('os');
//   data.brands = await loadPlatforms('brands');
// });

</script>

<style></style>