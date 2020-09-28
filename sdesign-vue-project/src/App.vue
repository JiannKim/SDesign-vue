<template>
  <div id="app">
    <AppHeader />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import VueRouter from 'vue-router'

// const routes = { path: '/logo-img'}

const router = new VueRouter({
  // routes
})

export default {
  name: 'app',
  components: {
    AppHeader,
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
