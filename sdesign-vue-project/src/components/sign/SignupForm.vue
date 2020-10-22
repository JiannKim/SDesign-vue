<template>
  <div id="form-wrapper">
    <h2 class="form-title">회원 가입</h2>
    <form @submit="submitForm" class="form-box signup">
      <div ref="form-input" class="form-input rectangles">
        <label :class="{isEmail: selectedId}" for="userid">email</label>
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
        <label :class="{isPass: selectedPass}" for="pass">password</label>
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
      if (!this.selectedPass) {
        this.selectedPass = true;
      } else {
        this.selectedPass = false;
      }
    },
    // userId() {
    //   alert("pass test");
    //   console.log("test1");
    //   this.$refs.test.focus(function () {
    //     console.log("test2");
    //     this.$refs.labels.css({
    //       background: "red",
    //     });
    //   });
    // },
  },
  // password: function () {
  //   alert("pass test");
  //   this.$refs.test.focus();
  // },
};
</script>

<style>
</style>
