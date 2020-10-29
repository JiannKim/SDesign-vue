import axios from "axios";

const apiURL = axios.create({
  // - axios 내부적으로 제공하는 속성
  baseURL: "http://193.122.127.197:2500/api",
  // timeout: 5000
});
// const config = {};

// signup api 요청 메서드
function registerUser(userInfo) {
  // const url = "http://193.122.127.197:2500/api/create/account";
  // console.log("userData" + userData);
  console.log("register data =>" + userInfo);
  return apiURL.post("/create/account", userInfo);
  // console.log("result1123123 => " + result);
  // return result;
}
// login api 요청 메서드
function loginUser(loginInfo) {
  console.log("login test => ", loginInfo);
  return apiURL.post("/login", loginInfo);
  // console.log("result data => " + result.data);
  // return result.data;
}

export { registerUser, loginUser };
