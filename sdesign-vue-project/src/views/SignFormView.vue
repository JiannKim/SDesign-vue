<template>
  <div id="form-container">
    <!-- <SignupForm /> -->
    <div>
      <modal name="signup-modal" :width="420" :height="610">
        <SignupForm />
      </modal>
    </div>
    <!-- <SignupForm /> -->
    <div>
      <modal name="login-modal" :width="420" :height="550">
        <LoginForm />
      </modal>
    </div>
  </div>
</template>

<script>
import SignupForm from "@/components/sign/SignupForm.vue";
import LoginForm from "@/components/sign/LoginForm.vue";

export default {
  data() {
    return {};
  },
  components: {
    SignupForm,
    LoginForm,
  },
};
</script>

<style>
@import "../assets/css/form.css";
</style>
