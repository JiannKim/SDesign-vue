import axios from "axios";

const apiURL = axios.create({
  // - axios.create() => axios 내부적으로 제공하는 속성
  // baseURL: "http://193.122.127.197:2500/api",
  // timeout: 5000

  // - 뷰에서 설정된 빌드 속성에 의해 env파일을 설정하여 쉽게 불러 올 수 있도록 해줌
  baseURL: process.env.VUE_APP_API_URL,
});
// const config = {};

// signup api 요청 메서드
function registerUser(userInfo) {
  // const url = "http://193.122.127.197:2500/api/create/account";
  // console.log("userData" + userData);
  console.log("register data =>" + userInfo);
  return apiURL.post("/create/account", userInfo);
}
// login api 요청 메서드
function loginUser(loginInfo) {
  console.log("login data => ", loginInfo);
  return apiURL.post("/login", loginInfo);
}

export { registerUser, loginUser };
