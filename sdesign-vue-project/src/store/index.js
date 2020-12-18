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
import { loginUser, searchSounds } from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    useremail: "",
    nickname: getUserFromCookie() || "",
    token: getAuthFromCookie() || "",
    searchtext: getSearchFromCookie() || "",
    soundid: "",
    // like: "",
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
    // setFavorite(state, like) {
    //   state.like = like;
    // },
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
    async SEARCH({ commit }, searchData, next) {
      const { data } = await searchSounds(searchData, next);
      saveSearchToCookie(searchData);
      commit("setSearchText", searchData);
      return data;
    },
  },
});
