<template>
  <div id="form-wrapper">
    <h1 class="form-title">로그인</h1>
    <form @submit.prevent="loginForm" class="form-box login">
      <div class="form-input rectangles">
        <label :class="{ isSelected: selectedId }" for="useremail">email</label>
        <input
          type="text"
          name="useremail"
          id="useremail"
          @focus="userId"
          v-model="useremail"
          placeholder="email"
        />
        <span class="underline"></span>
      </div>
      <div class="form-input rectangles">
        <label :class="{ isSelected: selectedPass }" for="pass">password</label>
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
      <p class="log-message">{{loginMessage}}</p>
      <button type="submit" class="btn form-button rectangles">로그인</button>
      <p>
        Go to
        <router-link to="/Signup">create a new account.</router-link>
      </p>
    </form>
    <button class="button close-button" @click="modalHide">
      <fa-icon :icon="['fas', 'times']" />
    </button>
  </div>
</template>

<script>
import { loginUser } from "@/api";

export default {
  data() {
    return {
      useremail: "",
      password: "",
      loginMessage: "",
      selectedId: false,
      selectedPass: false,
    };
  },
  props: {},
  methods: {
    async loginForm() {
      const userData = {
        accountEmail: this.useremail,
        accountPw: this.password,
      };
      const { data } = await loginUser(userData);
      console.log("response =>" + data.accountName);
      if (data == "5504") {
        console.log("바르게 입력해라!!");
        this.loginMessage = `* 아이디 또는 비밀번호가 맞지 않습니다. 다시 입력해 주세요!`;
      } else {
        this.loginMessage = `* ${data.accountName}님 로그인 되셨습니다`;
      }
      this.initForm();
      // let token = response.data.token;
      // let useremail = response.data.user.accountEmail;
      // let nickname = response.data.user.nickname;
      // console.log("useremail => " + useremail);
      // console.log("nickname => " + nickname);
      // this.$store.commit("setToken", token);
      // this.$store.commit("setUsers", useremail);
      // this.$store.commit("setNick", nickname);
      // fetchNotes();
    },
    initForm() {
      this.useremail = "";
      this.password = "";
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
      this.$modal.hide("login-modal");
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
