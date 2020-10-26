<template>
  <div id="form-container">
    <SignupForm />
  </div>
</template>

<script>
import SignupForm from "@/components/sign/SignupForm";

export default {
  data() {
    return {
      // styleOb: {
      //   width: "100%",
      //   height: "100%",
      //   backgroundColor: "rgba(0, 0, 0, 0.7)",
      //   display: "flex",
      //   flexFlow: "column",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   position: "fixed",
      //   top: "0px",
      //   zIndex: "2",
      // },
    };
  },
  components: {
    SignupForm,
  },
};
</script>

<style>
/* @import "../assets/css/form.css"; */
</style>
