import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import Home from "@/components/Home.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from 'pinia';
import Login from '@/components/Login.vue';
import Phones from '@/components/categories/Phones.vue'
import Platforms from '@/components/categories/Platforms.vue'
import Colors from '@/components/categories/Colors.vue'
import OS from '@/components/categories/OS.vue'
import Brands from '@/components/categories/Brands.vue'
import { useMainStore } from './store/main';

const routes = [
  {
    path: '/', name: 'Home', component: Home, redirect: '/phones', children: [
      {
        path: '/phones', name: 'Phone', component: Phones
      },
      {
        path: '/platforms', name: 'Platform', component: Platforms
      },
      {
        path: '/colors', name: 'Color', component: Colors
      },
      {
        path: '/os', name: 'Os', component: OS
      },
      {
        path: '/brands', name: 'Brand', component: Brands
      }
    ]
  },
  { path: '/login', name: 'Login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach((to, from) => {
  const mainStore = useMainStore();
  mainStore.setActiveCategory(to.name + 'Form');
})

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount('#app')