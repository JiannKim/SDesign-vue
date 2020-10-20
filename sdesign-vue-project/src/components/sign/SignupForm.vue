<template>
  <div id="form-wrapper">
    <h2>회원 가입</h2>
    <form @submit="submitForm">
      <div class="form-input">
        <label for="">email</label>
        <input type="text" v-model="userid" placeholder="email" />
      </div>
      <div class="form-input">
        <label for="">password</label>
        <input type="text" v-model="password" placeholder="password" />
      </div>
      <button type="submit" id="form-button">가입</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userid: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      var a = 10;
      // const userData = {
      //   userdi: this.userid,
      //   password: this.password,
      // };
    },
  },
};
</script>

<style></style>
