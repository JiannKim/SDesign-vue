<template>
  <div id="app">
    <div>
      <!-- <router-view></router-view> -->
      <!-- <button id="show-modal" @click="mounted">click</button> -->
      <!-- <modal name="example" v-if="showModal" @close="showModal = false"> -->
      <modal name="example" :width="350" :height="620">
        <!-- <LoginView /> -->
        <LoginForm />
      </modal>
    </div>
    <AppHeader />
    <AppMainTop />
    <AppMainConter />
    <AppMainBottom />
  </div>
</template>

<script>
// import AppHeader from "./views/AppHeader.vue";
import AppHeader from "@/views/AppHeader.vue";
import AppMainTop from "@/views/AppMainTop.vue";
import AppMainConter from "@/views/AppMainCenter.vue";
import AppMainBottom from "@/views/AppMainBottom.vue";
// import LoginView from "@/views/LoginView.vue";
import LoginForm from "@/components/sign/LoginForm.vue";

export default {
  data() {
    return {
      showModal: false,
    };
  },
  name: "app",
  components: {
    AppHeader,
    AppMainTop,
    AppMainConter,
    AppMainBottom,
    // LoginView,
    LoginForm,
  },
  // mounted() {
  //   this.$modal.show("example");
  // },
  // methods: {
  //   example() {
  //     this.$modal.show(
  //       "example",
  //       {
  //         hot_table: true,
  //         modal: this.$modal,
  //       },
  //       {
  //         name: "dynamic-modal",
  //         width: "330px",
  //         height: "130px",
  //         draggable: true,
  //       }
  //     );
  //   },
  // },
};
</script>

<style>
@import "./assets/css/common.css";
</style>
