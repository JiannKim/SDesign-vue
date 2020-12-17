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
    soundid: "",
    // fetchlist: {},
    // paginator: {},
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
    // setFetchList(state, fetchlist) {
    //   state.fetchlist = fetchlist;
    // },
    // setPaginator(state, paginator) {
    //   state.paginator = paginator;
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
    // 조회
    // async FETCH({ commit }, next) {
    //   const { data } = await fetchSounds(next);
    //   commit("setFetchList", data);
    //   commit("setPaginator", data.paginator);
    // },
    // 검색
    async SEARCH({ commit }, searchData, next) {
      const { data } = await searchSounds(searchData, next);
      commit("setSearchText", searchData);
      // commit("setSearchList", data.result);
      return data;
    },
  },
});
