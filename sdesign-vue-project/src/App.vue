<template>
  <div id="app">
    <AppHeader />
    <AppMainTop />
    <AppMainConter />
    <div id="app-signup-form">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/views/AppHeader.vue";
import AppMainTop from "./components/views/AppMainTop.vue";
import AppMainConter from "./components/views/AppMainCenter.vue";

// import VueRouter from 'vue-router'

// const routes = { path: '/logo-img'}

// const router = new VueRouter({
//   // routes
// })

export default {
  name: "app",
  components: {
    AppHeader,
    AppMainTop,
    AppMainConter,
  },
};
</script>

<style>
/* signup form */
#app-signup-form {
  /* display: none; */
  /* margin: 0; */
}

body {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  margin: 0;
  padding: 0;
  /* background: #282828; */
  color: #202020;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
