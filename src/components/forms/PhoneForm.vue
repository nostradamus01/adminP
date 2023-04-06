<template>
  <div class="form-cont">
    <form class="phones" @submit.prevent>
      <input class="input" placeholder="Model" id="model" name="model" type="text">
      <input class="input" placeholder="Released Date" id="releasedate" name="releasedate" type="date">
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
      <input class="input" placeholder="Brand ID" id="barnd_id" name="brand_id" type="number">
      <input class="input" placeholder="Price" id="price" name="price" type="number">
      <input class="input" placeholder="Discount" id="discount" name="discount" type="number">
      <input class="input" placeholder="Battery Capacity" id="battery_capacity" name="battery_capacity" type="text">
      <input class="input" placeholder="Size" id="screen_size" name="screen_size" type="text">
      <input class="input" placeholder="Brand ID" id="barnd_id" name="brand_id" type="number">
      <input class="input" placeholder="Price" id="price" name="price" type="number">
      <input class="input" placeholder="Discount" id="discount" name="discount" type="number">
      <input class="input" placeholder="Battery Capacity" id="battery_capacity" name="battery_capacity" type="text">
      <input class="input" placeholder="Size" id="screen_size" name="screen_size" type="text">
      <input class="input" placeholder="Brand ID" id="barnd_id" name="brand_id" type="number">
      <select name="os_id" id="os_id">
        <option value="0" disabled selected hidden>OS</option>
      </select>
      <select name="platform_id" id="platform_id">
        <option value="0" disabled selected hidden>Platform</option>
      </select>
      <button class="button" type="submit">SEND</button>
      <div class="error">
      </div>
    </form>
  </div>
</template>
<script>
export default {
  
}
</script>
<style></style>