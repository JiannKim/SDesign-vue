<template>
  <div id="form-wrapper">
    <h1 class="form-title">회원 가입</h1>
    <form @submit.prevent="submitForm" class="form-box signup">
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
      <div class="form-input rectangles">
        <label :class="{ isPass: selectedName }" for="name">user name</label>
        <input
          type="text"
          name="name"
          id="name"
          @focus="userName"
          v-model="nickname"
          placeholder="user name"
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
import { registerUser } from "@/api";

export default {
  data() {
    // const userInfo = [{ userid: "" }, { password: "" }];
    return {
      userid: "",
      password: "",
      nickname: "",
      selectedId: false,
      selectedPass: false,
      selectedName: false,
    };
  },
  methods: {
    submitForm() {
      const userData = {
        userid: this.userid,
        password: this.password,
        nickname: this.nickname,
      };
      registerUser(userData);
    },
    userId() {
      this.selectedId = true;
    },
    userPass() {
      this.selectedPass = true;
    },
    userName() {
      this.selectedName = true;
    },
    modalHide() {
      this.$modal.hide("example2");
    },
  },
};
</script>

<style></style>
