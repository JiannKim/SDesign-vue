<template>
  <div id="form-wrapper">
    <h2>로그인</h2>
    <form @submit="submitForm" class="form-box signup">
      <div class="form-input rectangles">
        <label for="">email</label>
        <input type="text" v-model="userid" placeholder="email" />
      </div>
      <div class="form-input rectangles">
        <label for="">password</label>
        <input type="text" v-model="password" placeholder="password" />
      </div>
      <button type="submit" class="form-button rectangles">로그인</button>
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
