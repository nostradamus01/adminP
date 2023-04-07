<template>
  <div>
    <form class="brand" @submit.prevent="sendData">
      <input v-model="name" class="input" placeholder="Name" id="name" name="name" type="text">
      <button class="button" type="submit">SEND</button>
      <div class="error">
      </div>
    </form>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>