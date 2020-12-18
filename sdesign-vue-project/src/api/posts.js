// 데이터(게시물) 조작과 관련된 api 함수 파일
import { posts } from "@/api";

// 사운드 리스트 데이터 조회 api 요청 메서드
function fetchSounds(token, next) {
  const config = { headers: { token }, params: { next } };
  return posts.get("/get/soundList", config);
}

// 고유 사운드 리스트 조회 api 요청 메서드
function fetchMySounds(token, next) {
  const config = { headers: { token }, params: { next } };
  return posts.get("/get/my/soundList", config);
}

// 사운드 리스트 데이터 생성 api 요청
function createSounds(formInfo, token) {
  let data = new FormData();
  const config = { headers: { token, "Content-Type": "multipart/form-data" } };
  data.append("userFile", formInfo.userFile);
  data.append("soundName", formInfo.soundName);
  data.append("category", formInfo.category);
  data.append("tags", formInfo.tags);
  return posts.post("/upload/file", data, config);
}

// 데이터 삭제 api 요청
function removeItem(removeInfo, token) {
  const config = { headers: { token } };
  return posts.post("/remove/my/sound", removeInfo, config);
}

// 검색 api 요청
function searchSounds(searchData, next) {
  const config = { params: { keyword: searchData, next } };
  return posts.get("/search/sound", config);
}

// 계정 이미지 수정 api 요청
function updateProfile(userInfo, token) {
  let data = new FormData();
  const config = { headers: { token, "Content-Type": "multipart/form-data" } };
  data.append("userImg", userInfo.userImg);
  data.append("accountName", userInfo.accountName);
  return posts.post("/update/profile", data, config);
}

// 계정 조회 api 요청
function fetchProfile(token) {
  const config = { headers: { token } };
  return posts.get("/get/profile/info", config);
}

// 좋아요 api 요청
function favoriteItem(id, token) {
  const config = { headers: { token } };
  return posts.post("/set/like", id, config);
}

// 좋아요 리스트 조회 api 요청
function fetchMyFavorite(token, next) {
  const config = { headers: { token }, params: { next } };
  return posts.get("/get/my/like/sounds", config);
}

export {
  fetchSounds,
  fetchMySounds,
  createSounds,
  removeItem,
  searchSounds,
  updateProfile,
  fetchProfile,
  favoriteItem,
  fetchMyFavorite,
};
