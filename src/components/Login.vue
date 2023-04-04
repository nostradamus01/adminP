<template>
  <div>
    <div class="parent">
      <div class="login">
        <div class="logo">
          <LogoSvg />
        </div>
        <form class="log" :class="{ loading: loginStore.isLoading }" @submit.prevent="onSubmit">
          <div class="loader"></div>
          <input v-model="username" class="username" type="text" placeholder="username">
          <input v-model="password" class="password" type="password" placeholder="password">
          <button class="btn" type="submit">LOGIN</button>
          <h2>{{ loginMessage }}</h2>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useLoginStore } from '@/store/loginStore';
import LogoSvg from '@/components/icons/Logo.vue';

export default {
  components: {
    LogoSvg,
  },
  setup() {
    const loginStore = useLoginStore();

    return { loginStore }
  },
  data() {
    return {
      username: '',
      password: '',
      loginMessage: ''
    }
  },
  methods: {
    onSubmit() {
      this.login({
        username: this.username,
        password: this.password
      });
    },
    async login(data) {
      this.loginStore.setLoading(true);
      const bodyObj = data;
      bodyObj.action = 'login';
      const harcum = await fetch('http://localhost:3000/api', {
        method: 'POST',
        body: JSON.stringify(bodyObj),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const patasxan = await harcum.json();
      this.loginStore.setLoading(false);
      if (patasxan.success === true) {
        this.$router.push('/');
      } else {
        this.loginMessage = 'Sxal es grel kam loginy kam paroly';
      }
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.parent {
  height: 100vh;
  display: flex;
  align-items: center;
}

.login {
  width: 200px;
  height: 300px;
  margin: 100px auto;
  background-color: #656668;
  border-radius: 10px;
  position: relative;
}

.logo {
  width: 50px;
  height: 50px;
  margin: 0 auto;
}

.svg {
  width: 100%;
  height: 100%;
}

.log {
  width: 100%;
  margin: 50px auto;
  text-align: center;

}

.log.loading::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffffa1;
}

.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  position: absolute;
  border-radius: 50%;
  left: 30%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
  display: none;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.log.loading .loader {
  display: block;
}

.username {
  margin-bottom: 10px;
}

.username,
.password {
  padding: 5px 10px;
  background-color: #9d9d9e;
}

.btn {
  margin-top: 30px;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: #9d9d9e;
  cursor: pointer;
  border-color: #868688;
}</style>