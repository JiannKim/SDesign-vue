<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
    <AppHeader />
    <AppMainTop />
    <AppMainConter />
  </div>
</template>

<script>
// import AppHeader from "./views/AppHeader.vue";
import AppHeader from "@/views/AppHeader.vue";
import AppMainTop from "@/views/AppMainTop.vue";
import AppMainConter from "@/views/AppMainCenter.vue";

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
@import "./assets/css/common.css";
</style>
