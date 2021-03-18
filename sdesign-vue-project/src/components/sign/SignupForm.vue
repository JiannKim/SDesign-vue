<template>
  <div id="form-wrapper">
    <template v-if="!this.send">
      <h1 class="form-title">회원 가입</h1>
      <form @submit.prevent="submitForm" class="form-box signup">
        <div class="form-input rectangles">
          <label :class="{ isSelected: !selectedId }" for="useremail">email</label>
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
        <span class="warning" v-if="!isUserEmailValid && useremail">올바른 이메일 형식을 입력해 주세요</span>
        <div class="form-input rectangles">
          <label :class="{ isSelected: !selectedPass }" for="pass">password</label>
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
        <span class="warning" v-if="!isUserPasswordValid && password">최소 6자 이상의 영문 + 숫자 조합</span>
        <div class="form-input rectangles">
          <label :class="{ isSelected: !selectedName }" for="name">user name</label>
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
        <button
          :disabled="!isUserEmailValid || !isUserPasswordValid || !nickname"
          type="submit"
          class="button disabled rectangles"
          :class="{ enabled: isUserEmailValid && isUserPasswordValid && nickname }"
        >가입</button>
        <p class="modal-open" @click="loginMounted">Already have an account? click here</p>
      </form>
      <button class="button close-button" @click="modalHide">
        <fa-icon :icon="['fas', 'times']" />
      </button>
    </template>
    <template v-else>
      <div class="form-box signup">
        <p>가입하신 이메일 주소로 가입 인증 메일을 보내드렸습니다.</p>
        <p>{{this.useremail}}</p>
        <br />
        <button class="button enabled rectangles" @click="loginMounted">Go to Login</button>
      </div>
      <button class="button close-button" @click="modalHide">
        <fa-icon :icon="['fas', 'times']" />
      </button>
    </template>
  </div>
</template>

<script>
import { registerUser } from "@/api/auth";
import { validateEmail, validatePassword } from "@/utils/validation";

export default {
  data() {
    return {
      useremail: "",
      password: "",
      nickname: "",
      signMessage: "",
      selectedId: true,
      selectedPass: true,
      selectedName: true,
      send: false,
    };
  },
  computed: {
    isUserEmailValid() {
      return validateEmail(this.useremail);
    },
    isUserPasswordValid() {
      return validatePassword(this.password);
    }
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
      try {
        const userData = {
          accountEmail: this.useremail,
          accountPw: this.password,
          accountName: this.nickname,
        };
        const { data } = await registerUser(userData);
        // console.log(data);
        // console.log("Signup response =>" + data.accountEmail);
        if (data === 3588) {
          console.log("Duplicate ID");
          this.signMessage = `* ${this.useremail} 은 이미 가입된 아이디 입니다.`;
        } else {
          // 데이터에 이메일이 언디파인드로 나와서 아직 사용할 수 없음..
          // console.log("else data =>" + data);
          // this.signMessage = `* ${data.accountEmail} 로 가입 되셨습니다.
          // 해당 이메일로 인증 메일을 전송 하였으니 인증 후 사용해 주세요 :)`;
          // 가입 완료시 모달 끄기
          // this.modalHide();
          this.send = true;
        }
      } catch (err) {
        return;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.useremail = "";
      this.password = "";
      this.nickname = "";
    },
    userId() {
      this.selectedId = false;
    },
    userPass() {
      this.selectedPass = false;
    },
    userName() {
      this.selectedName = false;
    },
  },
};
</script>

<style></style>
