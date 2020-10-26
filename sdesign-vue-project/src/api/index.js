import axios from "axios";

function registerUser() {
  const url = "http://193.122.127.197:2500/api/create/account";
  axios.post(url);
}

export { registerUser };
