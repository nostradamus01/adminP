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
import { ref, onMounted, toRaw } from 'vue';
import { useOs } from '@/use/useOs';
const { mainStore, categoriesStore, addOs, editOs } = useOs();

const errorMsg = ref('');
const name = ref('');

const sendData = async () => {

  errorMsg.value = '';

  if (name.value.trim() === '') {
    errorMsg.value = 'Some of these fields are empty';
  } else {
    if (mainStore.getFormOperation() === 'add') {
      await addOs({name: name.value}, true);
    } else {
      const osData = {name: name.value};
      osData.id = categoriesStore.getSelectedOsId;
      await editOs(osData);
    }
  }
  categoriesStore.selectOsId(null);
}


onMounted(async () => {
  const osId = categoriesStore.getSelectedOsId;
  const osesData = toRaw(categoriesStore.oses).data;
  if (osId !== null) {
    const selectedOs = osesData.find(os => os.id === osId);
    name.value = selectedOs.name || '';
  }
})

</script>

<style lang="scss"></style>