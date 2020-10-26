<template>
  <div id="app">
    <div>
      <modal name="example" :width="420" :height="550">
        <LoginForm />
      </modal>
      <modal name="example2" :width="420" :height="550">
        <SignupForm />
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
import LoginForm from "@/components/sign/LoginForm.vue";
import SignupForm from "@/components/sign/SignupForm.vue";

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
    LoginForm,
    SignupForm,
  },
  methods: {
    example() {
      this.$modal.show("example2", {
        name: "example2",
        width: "330px",
        height: "130px",
        draggable: true,
      });
    },
  },
};
</script>

<style>
@import "./assets/css/common.css";
@import "./assets/css/form.css";
</style>
