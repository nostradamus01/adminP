<template>
  <Transition name="modal">
    <div class="popup beauty-scrollbar" v-if="mainStore.isPopupVisible">
      <div class="popup-cont">
        <div class="form-container" :class="{ loading: mainStore.isFormLoading }">
          <div class="loader-cont">
            <div class="loader"></div>
          </div>
          <div class="popup-header">
            <h3>{{ formName }}</h3>
            <div class="exit">
              <ExitSvg @click="close" />
            </div>
          </div>
          <component :is="mainStore.activeCategoryForm"></component>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ExitSvg from '@/components/icons/Exit.vue';
import PlatformForm from '@/components/forms/PlatformForm.vue';
import PhoneForm from '@/components/forms/PhoneForm.vue';
import OsForm from '@/components/forms/OsForm.vue';
import BrandForm from './forms/BrandForm.vue';
import { useMainStore } from '@/store/main';

export default {
  components: {
    ExitSvg,
    PlatformForm,
    PhoneForm,
    OsForm,
    BrandForm
  },
  setup() {
    const mainStore = useMainStore();

    return { mainStore }
  },
  methods: {
    close() {
      this.mainStore.showPopup(false);
    },
    unmounted() {
      this.mainStore.setFormLoading(false);
    }
  },
  computed: {
    formName() {
      return this.mainStore.getFormOperation() === 'add' ? 'Add' : 'Edit'; 
    }
  }
}
</script>

<style lang="scss">
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.form-container {
  background-color: #999b9c;
  padding: 20px 25px;
  border-radius: 10px;
  position: relative;
}

.form-container.loading .loader-cont {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffffa1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15;
}

.form-container.loading .loader {
  display: block;
}

.exit {
  width: 30px;
  cursor: pointer;
}

.exit svg {
  width: 100%;
  height: 100%;
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