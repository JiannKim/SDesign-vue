<template>
  <div id="form-wrapper">
    <h2 class="form-title">로그인</h2>
    <form @submit="submitForm" class="form-box login">
      <div class="form-input rectangles">
        <label :class="{ isEmail: selectedId }" for="userid">email</label>
        <input
          type="text"
          name="userid"
          id="userid"
          @focus="userId"
          v-model="userid"
          placeholder="email"
        />
        <span class="underline"></span>
      </div>
      <div class="form-input rectangles">
        <label :class="{ isPass: selectedPass }" for="pass">password</label>
        <input
          type="password"
          name="pass"
          id="pass"
          @focus="userPass"
          v-model="password"
          placeholder="password"
        />
        <span class="underline"></span>
      </div>
      <button type="submit" class="btn form-button rectangles">로그인</button>
      <p>
        Go to
        <router-link to="/Signup">create a new account.</router-link>
      </p>
    </form>
    <button class="btn close-button" @click="modalHide">
      <fa-icon :icon="['fas', 'times']" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userid: "",
      password: "",
      selectedId: false,
      selectedPass: false,
    };
  },
  props: ["modal-form"],
  methods: {
    submitForm() {
      // const userData = {
      //   userdi: this.userid,
      //   password: this.password,
      // };
    },
    userId() {
      this.selectedId = true;
    },
    userPass() {
      this.selectedPass = true;

      // if (!this.selectedPass) {
      //   this.selectedPass = true;
      // } else {
      //   this.selectedPass = false;
      // }
    },
    modalHide() {
      console.log("ghjgjhg");
      this.$modal.hide("example");
    },
  },
};
</script>

<style>
/* @import "../../assets/css/form.css"; */

.close-button {
  all: unset;
  position: absolute;
  top: 20px;
  right: 20px;
  color: #31313131;
  font-size: 25px;
}
</style>
