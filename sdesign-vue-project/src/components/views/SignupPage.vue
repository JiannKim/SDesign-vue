<template>
  <div id="signup-form-wrapper">
    <h2>회원 가입</h2>
    <SignupForm />
  </div>
</template>

<script>
import SignupForm from "../signup/SignupForm.vue";

export default {
  components: {
    SignupForm,
  },
};
</script>

<style>
#signup-form-wrapper {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
}

#form-button {
  all: unset;
  background: rgb(161, 65, 240);
  width: 100%;
  height: 30px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  color: aliceblue;
}
#form-button:hover {
  background: rgb(172, 83, 245);
}
</style>
