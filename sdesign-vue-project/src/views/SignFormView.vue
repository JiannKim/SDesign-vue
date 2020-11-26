<template>
  <div id="form-container">
    <!-- <LoginForm /> -->
    <div>
      <modal name="login-modal" :width="400" :height="550">
        <LoginForm />
      </modal>
    </div>
    <!-- <SignupForm /> -->
    <div>
      <modal name="signup-modal" :width="410" :height="635">
        <SignupForm />
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

<style scope lang="scss">
@import "../style/form.css";

form {
  .modal-open {
    width: 110%;
    cursor: pointer;
    background: linear-gradient(
      45deg,
      rgb(255, 124, 179),
      47%,
      rgb(126, 6, 196)
    );
    background: -webkit-linear-gradient(
      45deg,
      rgb(255, 124, 179),
      47%,
      rgb(126, 6, 196)
    );
    background: -moz-linear-gradient(
      45deg,
      rgb(255, 124, 179),
      47%,
      rgb(126, 6, 196)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
}
</style>
