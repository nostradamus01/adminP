<template>
  <Header></Header>
  <div class="add">
    <button class="addbtn" @click="showPopup">Add</button>
    <h3>{{ mainStore.activeCategoryForm }}</h3>
  </div>
  <div v-if="mainStore.isPopupVisible">
    <Popup></Popup>
  </div>
  <router-view></router-view>
</template>

<script>
import { useMainStore } from '@/store/mainStore';
import Header from '@/components/Header.vue';
import Popup from '@/components/Popup.vue';

export default {
  components: {
    Header,
    Popup
  },
  setup() {
    const mainStore = useMainStore();

    return { mainStore }
  },
  methods: {
    showPopup() {
      this.mainStore.showPopup(true);
    }
  }
}
</script>

<style>
.add {
  display: flex;
  justify-content: center;
  align-items: center;
  ;
  margin: 20px;
}

.add button {
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  font-weight: 900;
  background-color: #bca4a4;
  font-size: 16px;
  margin-right: 20px;
}

.add button:hover {
  background-color: #8b7575;
}
</style>