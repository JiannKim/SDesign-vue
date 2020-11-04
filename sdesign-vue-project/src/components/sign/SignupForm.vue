<template>
  <div id="form-wrapper">
    <h1 class="form-title">회원 가입</h1>
    <form @submit.prevent="submitForm" class="form-box signup">
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
      <div class="form-input rectangles">
        <label :class="{ isSelected: selectedName }" for="name"
          >user name</label
        >
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
      <p class="log-message">{{ signMessage }}</p>
      <button type="submit" class="form-button rectangles">가입</button>
      <p class="modal-open" @click="loginMounted">
        Already have an account? click here
      </p>
    </form>
    <button class="button close-button" @click="modalHide">
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
      useremail: "",
      password: "",
      nickname: "",
      signMessage: "",
      selectedId: false,
      selectedPass: false,
      selectedName: false,
    };
  },
  methods: {
    loginMounted() {
      this.modalHide();
      this.$modal.show("login-modal");
    },
    modalHide() {
      this.$modal.hide("signup-modal");
    },
    async submitForm() {
      const userData = {
        accountEmail: this.useremail,
        accountPw: this.password,
        accountName: this.nickname,
      };
      // console.log("user data => " + userData);
      const { data } = await registerUser(userData);
      console.log("Signup response =>" + data.accountEmail);
      if (data == "3588") {
        console.log("중복된 아이디다!!");
        this.signMessage = `* 중복된 아이디 입니다`;
      } else {
        this.signMessage = `* ${data.accountEmail}로 가입 되셨습니다`;
      }
      console.log(data);
      // console.log(data.useremail);
      // this.logMessage = `${data.useremail} 님이 가입되셨습니다`;
      // this.initForm();
    },
    initForm() {
      this.useremail = "";
      this.password = "";
      this.nickname = "";
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
  },
};
</script>

<style></style>
