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

<script>
import { createClient } from "@supabase/supabase-js";
const { VITE_SUPABASE_URL, VITE_SUPABASE_KEY } = import.meta.env;

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);

export default {
  data() {
    return {
      chipset: '',
      gpu: '',
      cpu: ''
    }
  },
  methods: {
    async sendData() {
      const { chipset, cpu, gpu } = this;
      const { error } = await supabase
      .from('platforms')
      .insert({ cpu: cpu, gpu: gpu, chipset: chipset });
      console.log(error);
      // const bodyObj = {
      //   action: 'addPlatform',
      //   data: {
      //     chipset: this.chipset,
      //     gpu: this.gpu,
      //     cpu: this.cpu
      //   }
      // };
      // console.log(bodyObj);
      // const harcum = await fetch('/api/apu', {
      //   method: 'POST',
      //   body: JSON.stringify(bodyObj),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });
      // const patasxan = await harcum.json();
      // console.log(patasxan);
    }
  },
}
</script>
<style></style>