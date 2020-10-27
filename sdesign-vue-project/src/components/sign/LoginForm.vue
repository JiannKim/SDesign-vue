<template>
  <div id="form-wrapper">
    <h1 class="form-title">로그인</h1>
    <form @submit.prevent="loginForm" class="form-box login">
      <div class="form-input rectangles">
        <label :class="{ isEmail: selectedId }" for="useremail">email</label>
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
      selectedId: false,
      selectedPass: false,
    };
  },
  methods: {
    loginForm() {
      const userData = {
        accountEmail: this.useremail,
        accountPw: this.password,
      };
      loginUser(userData)
        .then((response) => {
          console.log("responser =>" + response);
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
        })
        .catch((errer) => console.log(errer));
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
