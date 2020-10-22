<template>
  <div id="form-wrapper">
    <h2>로그인</h2>
    <form @submit="submitForm" class="form-box signup">
      <div class="form-input rectangles">
        <label :class="{isEmail: selectedId}" for="userid">email</label>
        <input
          type="text"
          name="userid"
          id="userid"
          @focus="userId"
          v-model="userid"
          placeholder="email"
        />
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
      </div>
      <button type="submit" class="form-button rectangles">로그인</button>
      <p>
        Go to
        <router-link to="/Signup">create a new account.</router-link>
      </p>
    </form>
    <button ref="btn" @click="modalHide">close</button>
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
    modalHide() {
      console.log("ghjgjhg");
      this.$modal.hide("example");
    },
  },
};
</script>

<style></style>
