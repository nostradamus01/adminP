<template>
  <div>
    <div class="popup">
      <div class="form-container">
        <div class="popup-header">
          <h3>PHONES</h3>
          <div class="exit">
            <ExitSvg @click="close" />
          </div>
        </div>
        <component :is="mainStore.activeCategoryForm"></component>
      </div>
    </div>
  </div>
</template>
<script>
import ExitSvg from '@/components/icons/Exit.vue';
import { useMainStore } from '@/store/mainStore';
import PhoneForm from '@/components/forms/PhoneForm.vue';
import PlatformForm from '@/components/forms/PlatformForm.vue';

export default {
  components: {
    ExitSvg,
    PhoneForm,
    PlatformForm
  },
  methods: {
    close() {
      this.mainStore.showPopup(false);
    }
  },
  setup() {
    const mainStore = useMainStore();

    return { mainStore }
  }
}
</script>
<style >
.form-container {
  background-color: #999b9c;
  padding: 20px 25px;
  border-radius: 10px;
}

.exit {
  width: 30px;
  cursor: pointer;
}

.exit svg {
  width: 100%;
  height: 100%;
}

.popup {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(39, 34, 28, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup.popup2 {
  visibility: visible;
}

.popup-header {
  display: flex;
  justify-content: space-between;
}

form {
  padding: 15px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dimensions {
  display: flex;
}

.input {
  padding: 5px;
  width: 100%;
  margin: 7px 0;
  font-size: 16px;
}

select {
  margin: 7px 0;
  padding: 10px;
  width: 100%;
}

.button {
  margin-top: 20px;
  width: 30%;
  padding: 5px 15px;
  background-color: aqua;
  border-radius: 20px;
  border: none;
  color: blue;
  font-weight: 800;
  cursor: pointer;
}

.button:hover {
  background-color: rgb(255, 125, 125);
  font-weight: 800;
  color: rgb(54, 0, 0);
}
</style>