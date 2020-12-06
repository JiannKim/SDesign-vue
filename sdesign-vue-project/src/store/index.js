import Vue from "vue";
import Vuex from "vuex";
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from "@/utils/cookies";
import { loginUser, searchSounds } from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    useremail: "",
    nickname: getUserFromCookie() || "",
    token: getAuthFromCookie() || "",
    searchtext: "",
  },
  getters: {
    isLogin(state) {
      return state.token !== "";
    },
    isSearch(state) {
      return state.searchtext !== "";
    },
  },
  mutations: {
    setUserEmail(state, useremail) {
      state.useremail = useremail;
    },
    setUserName(state, nickname) {
      state.nickname = nickname;
    },
    setToken(state, token) {
      state.token = token;
    },
    clearUserInfo(state) {
      state.nickname = "";
      state.token = "";
    },
    setSearchText(state, searchtext) {
      state.searchtext = searchtext;
    },
  },
  actions: {
    // 로그인
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log("response.data =>", data);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.accountName);
      commit("setUserEmail", data.accountEmail);
      commit("setUserName", data.accountName);
      commit("setToken", data.token);
      return data;
    },
    // 검색
    async SEARCH({ commit }, searchData) {
      const { data } = await searchSounds(searchData);
      console.log("store", data);
      commit("setSearchText", searchData);
      return data;
    },
  },
  watch: {
    $route(to, from) {
      if (to.path === "/promotions") {
        this.$store.dispatch("getAllPromotions");
      } else if (to.path === "/promotions/coupon") {
        this.$store.dispatch("getAllPromotions", {
          type: "coupon",
        });
      }
    },
  },
});
