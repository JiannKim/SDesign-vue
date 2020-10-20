<template>
  <div id="form-wrapper">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "../sign/LoginForm.vue";

export default {
  components: {
    LoginForm,
  },
};
</script>

<style>
@import "../../assets/css/form.css";
</style>
