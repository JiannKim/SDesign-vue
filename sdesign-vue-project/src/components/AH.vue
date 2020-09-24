<template>
  <header id="app-header-wrapper">
    <!-- <router-link tag="a" to="#"> -->
      <img class="app-logo" src="https://i.ibb.co/pWfncYT/s-Design-Logo-01.png" alt="s-Design-Logo" />
    <!-- </router-link> -->
    <AppSidebarMenu />
  </header>
</template>


<script>
import AppSidebarMenu from './AppSidebarMenu.vue';

export default {
  components: {
    AppSidebarMenu,
  }
}
</script>

<style>
  /* 헤더 박스 스타일 */
#app-header-wrapper {
    background-color: #fff;
    min-height: 60px;
    width: 100%;
    height: 73px;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
}

.app-logo {
    width: 50px;
    margin: 0 30px 0 147px;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>