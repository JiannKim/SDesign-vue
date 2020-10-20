<template>
  <div id="form-container">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/sign/LoginForm";

export default {
  components: {
    LoginForm,
  },
};
</script>

<style>
@import "../assets/css/form.css";
</style>
