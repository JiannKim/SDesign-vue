import axios from "axios";
import { setInterceptors } from "./common/interceptors";

// axios 초기화 함수
function createInstance() {
  const apiURL = axios.create({
    // - axios.create() => axios 내부적으로 제공하는 속성
    // baseURL: "http://193.122.127.197:2500/api",

    // - 뷰에서 설정된 빌드 속성에 의해 env파일을 설정하여 쉽게 불러 올 수 있도록 해줌
    baseURL: process.env.VUE_APP_API_URL,
    // timeout: 5000
  });

  // interceptors 파일에서 apiURL===instance로 연결
  return setInterceptors(apiURL);
}
const instance = createInstance();

// signup api 요청 메서드
function registerUser(userInfo) {
  // const url = "http://193.122.127.197:2500/api/create/account";
  console.log("register data(userInfo) =>", userInfo);
  return instance.post("/create/account", userInfo);
}
// login api 요청 메서드
function loginUser(loginInfo) {
  console.log("login data => ", loginInfo);
  return instance.post("/login", loginInfo);
}
// 사운드 리스트 데이터 조회 api 요청 메서드
// function fetchSounds(token) {
//   console.log("fetchSounds() test");
//   return instance.get("/get/my/soundList", token);
// }
function fetchSounds() {
  console.log("fetchSounds() test");
  return instance.get("/get/soundList");
}

export { registerUser, loginUser, fetchSounds };
