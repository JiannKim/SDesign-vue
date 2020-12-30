import Vue from "vue";
import Vuex from "vuex";
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
  saveSearchToCookie,
  getSearchFromCookie,
} from "@/utils/cookies";
import { loginUser } from "@/api/auth";
import { searchSounds } from "@/api/posts";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    useremail: "",
    nickname: getUserFromCookie() || "",
    token: getAuthFromCookie() || "",
    searchtext: getSearchFromCookie() || "",
    soundid: "",
  },
  getters: {
    isLogin(state) {
      const result =
        state.token !== "" && state.token !== undefined ? true : false;
      return result;
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
    setSoundId(state, soundid) {
      state.soundid = soundid;
    },
  },
  actions: {
    // 로그인
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.accountName);
      commit("setUserEmail", data.accountEmail);
      commit("setUserName", data.accountName);
      commit("setToken", data.token);
      return data;
    },
    // 검색
    async SEARCH({ commit }, config) {
      const { data } = await searchSounds(
        config.token,
        config.keyword,
        config.next
      );
      saveSearchToCookie(config.keyword);
      commit("setSearchText", config.keyword);
      return data;
    },
  },
});
