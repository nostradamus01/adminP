<template>
    <div class="parent">
        <header class="header">
            <div class="menu">
                <div class="logo">
                    <router-link to="/phones">
                        <LogoSvg />
                    </router-link>
                </div>
                <div class="parent-cat">
                    <div class="categories">
                        <router-link to="/phones"><button>Phones</button></router-link>
                        <router-link to="/platforms"><button>Platform</button></router-link>
                        <router-link to="/colors"><button>Color</button></router-link>
                        <router-link to="/os"><button>OS</button></router-link>
                        <router-link to="/brands"><button>Brand</button></router-link>
                    </div>
                </div>
                <div class="out logo">
                    <LogoutSvg />
                </div>
            </div>
        </header>
    </div>
</template>
<script>
import LogoSvg from '@/components/icons/Logo.vue';
import LogoutSvg from '@/components/icons/Logout.vue';
export default {
    components: {
        LogoSvg,
        LogoutSvg
    }
}
</script>
<style scoped>
.parent{
    background-color: #8d8f91;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    height: 80px;
}
.header {
    display: flex;
    justify-content: center;
}

.logo svg {
    width: 60px;
    height: 100%;
    cursor: pointer;
}

.menu {
    width: 100%;
    padding: 0 30px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
}
.parent-cat {
  width: 100%;
  height: 80px;
  background-color: var(--back-color);
  display: flex;
  align-items: center;
}

.categories {
  width: 85%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  gap: 10px;
  align-items: center;
}

.categories button {
  padding: 10px 15px;
  flex: 1;
  cursor: pointer;
}
.logo {
    display: inline-block;
    align-items: center;
}

.out {
    display: flex;
    align-items: center;
}

.router-link-active button {
  background-color: #a13d3d;
}
</style>