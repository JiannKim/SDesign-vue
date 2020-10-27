<template>
  <div id="app">
    <TheHeader />
    <router-view></router-view>
    <SignFormView />
  </div>
</template>

<script>
import TheHeader from "@/components/common/TheHeader.vue";
// import LoginForm from "@/components/sign/LoginForm.vue";
// import SignupForm from "@/components/sign/SignupForm.vue";
import SignFormView from "@/views/SignFormView.vue";

export default {
  data() {
    return {
      showModal: false,
    };
  },
  name: "app",
  components: {
    TheHeader,
    // LoginForm,
    // SignupForm,
    SignFormView,
  },
  methods: {},
};
</script>

<style>
@import "./assets/css/common.css";
/* @import "./assets/css/form.css"; */
</style>
