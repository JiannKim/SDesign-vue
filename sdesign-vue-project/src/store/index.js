import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    useremail: "",
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
  },
});
