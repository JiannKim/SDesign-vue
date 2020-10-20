<template>
  <div id="form-container">
    <h2>로그인</h2>
    <form @submit="submitForm">
      <div class="form-input">
        <label for="">email</label>
        <input type="text" v-model="userid" placeholder="email" />
      </div>
      <div class="form-input">
        <label for="">password</label>
        <input type="text" v-model="password" placeholder="password" />
      </div>
      <button type="submit" id="form-button">로그인</button>
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
      // const userData = {
      //   userdi: this.userid,
      //   password: this.password,
      // };
    },
  },
};
</script>

<style></style>
