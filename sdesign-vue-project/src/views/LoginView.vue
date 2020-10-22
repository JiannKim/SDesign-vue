<template>
  <div>
    <div id="form-container" @click="$emit('close')">
      <LoginForm />
    </div>
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
