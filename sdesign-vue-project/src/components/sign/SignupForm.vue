<template>
  <div id="form-wrapper">
    <h2 class="form-title">회원 가입</h2>
    <form @submit="submitForm" class="form-box signup">
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
      <button type="submit" class="form-button rectangles">가입</button>
      <p>
        Already have an account?
        <router-link to="/login">click here</router-link>
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
    // const userInfo = [{ userid: "" }, { password: "" }];
    return {
      userid: "",
      password: "",
      selectedId: false,
      selectedPass: false,
    };
  },
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
    },
    modalHide() {
      console.log("ghjgjhg");
      this.$modal.hide("example2");
    },
  },
};
</script>

<style></style>
