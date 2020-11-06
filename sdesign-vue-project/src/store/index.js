import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    useremail: "",
    nickname: "",
    token: "",
  },
  getters: {
    isLogin(state) {
      return state.useremail !== "";
    },
  },
  mutations: {
    setUserEmail(state, useremail) {
      state.useremail = useremail;
    },
    setUserName(state, nickname) {
      state.nickname = nickname;
    },
    clearUserEmail(state) {
      state.useremail = "";
    },
    setToken(state, token) {
      state.token = token;
    },
  },
});