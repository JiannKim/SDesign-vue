<template>
  <div id="app">
    <div>
      <!-- <router-view></router-view> -->
      <!-- <button id="show-modal" @click="mounted">click</button> -->
      <!-- <modal name="example" v-if="showModal" @close="showModal = false"> -->
      <modal name="example">
        <!-- <router-view></router-view> -->
        <!-- <LoginView id="modal-test" /> -->
        <div>
          id="form-wrapper">
          <h2>로그인</h2>
          <form @submit="submitForm" class="form-box signup">
            <div class="form-input rectangles">
              <label :class="{isEmail: selectedId}" for="userid">email</label>
              <input
                type="text"
                name="userid"
                id="userid"
                @focus="userId"
                v-model="userid"
                placeholder="email"
              />
            </div>
            <div class="form-input rectangles">
              <label :class="{isPass: selectedPass}" for="pass">password</label>
              <input
                type="password"
                name="pass"
                id="pass"
                @focus="userPass"
                v-model="password"
                placeholder="password"
              />
            </div>
            <button type="submit" class="form-button rectangles">로그인</button>
            <p>
              Go to
              <router-link to="/Signup">create a new account.</router-link>
            </p>
          </form>
          <button ref="btn" @click="modalHide">close</button>
        </div>
      </modal>
    </div>
    <AppHeader />
    <AppMainTop />
    <AppMainConter />
    <AppMainBottom />
  </div>
</template>

<script>
// import AppHeader from "./views/AppHeader.vue";
import AppHeader from "@/views/AppHeader.vue";
import AppMainTop from "@/views/AppMainTop.vue";
import AppMainConter from "@/views/AppMainCenter.vue";
import AppMainBottom from "@/views/AppMainBottom.vue";
// import LoginView from "@/views/LoginView.vue";

export default {
  data() {
    return {
      showModal: false,
    };
  },
  name: "app",
  components: {
    AppHeader,
    AppMainTop,
    AppMainConter,
    AppMainBottom,
    // LoginView,
  },
};
</script>

<style>
@import "./assets/css/common.css";
</style>
