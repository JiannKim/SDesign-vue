<template>
  <div id="form-wrapper">
    <h1 class="form-title">로그인</h1>
    <form @submit.prevent="loginForm" class="form-box login">
      <div class="form-input rectangles">
        <label :class="{ isSelected: !selectedId }" for="useremail"
          >email</label
        >
        <input
          v-focus
          type="email"
          name="useremail"
          id="useremail"
          @focus="userId"
          v-model="useremail"
          placeholder="email"
        />
        <span class="underline"></span>
      </div>
      <span class="warning" v-if="!isUserEmailValid && useremail"
        >올바른 이메일 형식을 입력해 주세요</span
      >
      <div class="form-input rectangles">
        <label :class="[{ isSelected: !selectedPass }, errorClass]" for="pass"
          >password</label
        >
        <input
          type="password"
          name="pass"
          id="pass"
          @focus="userPass"
          v-model="password"
          placeholder="password"
        />
        <span class="underline" :class="{ errorClass }"></span>
      </div>
      <p class="log-message">{{ loginMessage }}</p>
      <button
        :disabled="!isUserEmailValid || !password"
        type="submit"
        class="button disabled rectangles"
        :class="{ enabled: isUserEmailValid && password }"
      >
        로그인
      </button>
      <p class="modal-open" @click="signupMounted">
        Go to create a new account.
      </p>
    </form>
    <button class="button close-button" @click="modalHide">
      <fa-icon :icon="['fas', 'times']" />
    </button>
  </div>
</template>

<script>
import { validateEmail } from "@/utils/validation";

export default {
  data() {
    return {
      useremail: "",
      password: "",
      loginMessage: "",
      selectedId: true,
      selectedPass: true,
      errorClass: "",
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
        const data = await this.$store.dispatch("LOGIN", userData);
        // 비밀번호를 다르게 입력한 경우
        if (data == "5504") {
          this.loginMessage = `* 비밀번호가 맞지 않습니다. 다시 입력해 주세요!`;
          this.initPass();
        } else {
          // 로그인 했을 때 페이지 이동 => main
          // this.$router.push("/");
          this.$forceUpdate();
          // 모달 닫기
          this.modalHide();
        }
      } catch (err) {
        // 에러 핸들링할 코드
        // console.log(err.response);
        this.loginMessage = `* 가입 정보가 없거나 미인증 이메일 입니다. 올바른 정보를 입력해 주세요!`;
        this.initForm();
      }
    },
    initPass() {
      this.password = "";
    },
    initForm() {
      this.useremail = "";
      this.password = "";
    },
    userId() {
      this.selectedId = false;
    },
    userPass() {
      this.selectedPass = false;
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
