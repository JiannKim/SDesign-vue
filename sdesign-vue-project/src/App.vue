<template>
  <div id="app">
    <AppHeader />
    <AppMainTop />
    <AppMainConter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppMainTop from './components/AppMainTop.vue'
import AppMainConter from './components/AppMainCenter.vue'

// import VueRouter from 'vue-router'

// const routes = { path: '/logo-img'}

// const router = new VueRouter({
//   // routes
// })

export default {
  name: 'app',
  components: {
    AppHeader,
    AppMainTop,
    AppMainConter,
  },
};
</script>

<style>
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
