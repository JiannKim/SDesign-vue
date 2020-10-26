<template>
  <div id="app">
    <router-view></router-view>
    <div>
      <modal name="example" :width="420" :height="550">
        <LoginForm />
      </modal>
    </div>
    <div>
      <modal name="example2" :width="420" :height="610">
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
import AppHeader from "@/views/AppHeader.vue";
import AppMainTop from "@/views/AppMainTop.vue";
import AppMainConter from "@/views/AppMainCenter.vue";
import AppMainBottom from "@/views/AppMainBottom.vue";
import LoginForm from "@/components/sign/LoginForm.vue";
import SignupForm from "@/components/sign/SignupForm.vue";
// import LoginView from "@/views/LoginView.vue";
// import SignupView from "@/views/SignupView.vue";

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
    // LoginView,
    // SignupView,
  },
  methods: {},
};
</script>

<style>
@import "./assets/css/common.css";
@import "./assets/css/form.css";
</style>
