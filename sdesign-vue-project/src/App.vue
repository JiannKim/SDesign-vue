<template>
  <div id="app">
    <AH />
  </div>
</template>

<script>
import AH from './components/AH.vue';
import VueRouter from 'vue-router'

// const LogoImg = { template: '<img class="app-logo" src="https://i.ibb.co/pWfncYT/s-Design-Logo-01.png" alt="s-Design-Logo" >'}

// const routes = { path: '/logo-img'}

const router = new VueRouter({
  // routes
})

export default {
  el: '#app',
  components: {
    AH,
  },
  router,
}
</script>

<style>
  #app {
    margin: 0;
    padding: 0;
    /* background: #282828; */
    color: #202020;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
