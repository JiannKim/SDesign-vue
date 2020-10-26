import axios from "axios";

function registerUser(userData) {
  const url = "http://193.122.127.197:2500/api/create/account";
  const config = {};
  console.log(userData);
  const data = {
    accountEmail: userData.userid,
    accountPw: userData.password,
    accountName: userData.nickname,
  };
  axios.post(url, data, config);
}

export { registerUser };
