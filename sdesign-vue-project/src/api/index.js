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
function registerUser(joinInfo) {
  // const url = "http://193.122.127.197:2500/api/create/account";
  return instance.post("/create/account", joinInfo);
}
// login api 요청 메서드
function loginUser(loginInfo) {
  return instance.post("/login", loginInfo);
}
// 고유 사운드 리스트 조회 api 요청 메서드
function fetchMySounds(token, next) {
  const config = { headers: { token }, params: { next } };
  return instance.get("/get/my/soundList", config);
}
// 사운드 리스트 데이터 조회 api 요청 메서드
function fetchSounds(token, next) {
  const config = {headers: { token },  params: { next } };
  return instance.get("/get/soundList", config);
}
// 사운드 리스트 데이터 생성 api 요청
function createSounds(formInfo, token) {
  let data = new FormData();
  const config = { headers: { token, "Content-Type": "multipart/form-data" } };
  data.append("userFile", formInfo.userFile);
  data.append("soundName", formInfo.soundName);
  data.append("category", formInfo.category);
  data.append("tags", formInfo.tags);
  return instance.post("/upload/file", data, config);
}
// 데이터 삭제 api 요청
function removeItem(removeInfo, token) {
  const config = { headers: { token } };
  return instance.post("/remove/my/sound", removeInfo, config);
}
// 검색 api 요청
function searchSounds(searchData, next) {
  const config = { params: { keyword: searchData, next } };
  return instance.get("/search/sound", config);
}
// 계정 이미지 수정 api 요청
function updateProfile(userInfo, token) {
  let data = new FormData();
  const config = { headers: { token, "Content-Type": "multipart/form-data" } };
  data.append("userImg", userInfo.userImg);
  data.append("accountName", userInfo.accountName);
  return instance.post("/update/profile", data, config);
}
// 계정 조회 api 요청
function fetchProfile(token) {
  const config = { headers: { token } };
  return instance.get("/get/profile/info", config);
}
// 좋아요 api 요청
function favoriteItem(id, token) {
  const config = { headers: { token } };
  return instance.post("/set/like", id, config);
}
// 좋아요 리스트 조회 api 요청
function fetchMyFavorite(token, next) {
  const config = { headers: { token }, params: { next } };
  return instance.get("/get/my/like/sounds", config);
}

// download 버튼 활성화 시켜주는 api
function downloadItem(url, label) {
  axios
    .get(url, { responseType: "blob" })
    .then((response) => {
      const blob = new Blob([response.data], { type: "audio/mp3" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = label;
      link.click();
      URL.revokeObjectURL(link.href);
    })
    .catch(console.error);
}

export {
  registerUser,
  loginUser,
  fetchMySounds,
  fetchSounds,
  downloadItem,
  createSounds,
  removeItem,
  searchSounds,
  updateProfile,
  fetchProfile,
  favoriteItem,
  fetchMyFavorite,
};
