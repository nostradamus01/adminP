<template>
  <div>
    <form class="phones" @submit.prevent="sendData">
      <input v-model="chipset" class="input" placeholder="Chipset" id="chipset" name="chipset" type="text">
      <input v-model="gpu" class="input" placeholder="Gpu" id="gpu" name="gpu" type="text">
      <input v-model="cpu" class="input" placeholder="Cpu" id="cpu" name="cpu" type="text">
      <button class="button" type="submit">SEND</button>
      <div class="error">
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { createClient } from "@supabase/supabase-js";
import { useMainStore } from '@/store/mainStore';
import { useCategoriesStore } from '@/store/categoriesStore';
const categoriesStore = useCategoriesStore();
const { VITE_SUPABASE_URL, VITE_SUPABASE_KEY } = import.meta.env;
const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);
const mainStore = useMainStore();
const chipset = ref('');
const gpu = ref('');
const cpu = ref('');
const sendData = async () => {
  mainStore.showPopup(false);
  const { error } = await supabase
    .from('platforms')
    .insert({ cpu: cpu.value, gpu: gpu.value, chipset: chipset.value });
  categoriesStore.getPlatforms();
}
</script >

<style></style>