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
      <p class="log-message">{{ loginMessage }}</p>
      <button :disabled="!isUserEmailValid || !password" type="submit" class="button form-button rectangles">로그인</button>
      <p class="modal-open" @click="signupMounted">
        Go to create a new account.
        <!-- <router-link to="/main">create a new account.</router-link> -->
      </p>
    </form>
    <button class="button close-button" @click="modalHide">
      <fa-icon :icon="['fas', 'times']" />
    </button>
  </div>
</template>

<script>
import { loginUser } from "@/api";
import { validateEmail } from "@/utils/validation";

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
  computed: {
    isUserEmailValid() {
      return validateEmail(this.useremail);
    },
  },
  methods: {
    signupMounted() {
      this.modalHide();
      this.$modal.show("signup-modal");
    },
    modalHide() {
      this.$modal.hide("login-modal");
    },
    async loginForm() {
      try {
        // 실행 비즈니스 로직
        const userData = {
          accountEmail: this.useremail,
          accountPw: this.password,
        };
        const { data } = await loginUser(userData);
        console.log("response.data =>" + data);
        console.log("response =>" + data.accountName);
        if (data == "5504") {
          console.log("바르게 입력해라!!");
          this.loginMessage = `* 아이디 또는 비밀번호가 맞지 않습니다. 다시 입력해 주세요!`;
        } else {
          this.modalHide();
          // this.loginMessage = `* ${data.accountName}님 로그인 되셨습니다`;
        }
        // let token = response.data.token;
        // let useremail = response.data.user.accountEmail;
        // let nickname = response.data.user.nickname;
        // console.log("useremail => " + useremail);
        // console.log("nickname => " + nickname);
        // this.$store.commit("setToken", token);
        // this.$store.commit("setUsers", useremail);
        // this.$store.commit("setNick", nickname);
        // fetchNotes();
      } catch (error) {
        // 에러 핸들링할 코드
        console.log(error.response);
        this.loginMessage = `* 가입 정보가 없습니다. 올바른 정보를 입력해 주세요!`;
        // this.initForm();
      } finally {
        this.initForm();
      }
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
  },
};
</script>

<style scope lang="scss">
.close-button {
  all: unset;
  position: absolute;
  top: 20px;
  right: 20px;
  color: #31313131;
  font-size: 25px;
}
</style>
