import axios from "axios";

const apiURL = axios.create({
  // - axios 내부적으로 제공하는 속성
  baseURL: "http://193.122.127.197:2500/api",
  // timeout: 5000
});

function registerUser(userData) {
  const url = "http://193.122.127.197:2500/api/create/account";
  const config = {};
  console.log(userData);
  const data = {
    accountEmail: userData.useremail,
    accountPw: userData.password,
    accountName: userData.nickname,
  };
  axios.post(url, data, config);
}

function loginUser(loginInfo) {
  console.log("login test => ", loginInfo);
  return apiURL.post("/login", loginInfo);
}

export { registerUser, loginUser };
