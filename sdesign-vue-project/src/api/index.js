import axios from "axios";
import { setInterceptors } from "./common/interceptors";

// instance & interceptor
function create(url) {
  const instance = axios.create(Object.assign({ baseURL: url }));
  return instance;
}

// 로그인 후 사용 될 인스턴스
function createWithAuth(url) {
  const instance = axios.create(Object.assign({ baseURL: url }));
  setInterceptors(instance);
  return instance;
}

export const instance = create(process.env.VUE_APP_API_URL);
export const posts = createWithAuth(process.env.VUE_APP_API_URL);

// axios 초기화 함수
// function createInstance() {
//   const apiURL = axios.create({
//     // - axios.create() => axios 내부적으로 제공하는 속성
// - baseURL => api 엔드포인트
//     // baseURL: "http://193.122.127.197:2500/api",

//     // - 뷰에서 설정된 빌드 속성에 의해 env파일을 설정하여 쉽게 불러 올 수 있도록 해줌
//     baseURL: process.env.VUE_APP_API_URL,
//     // timeout: 5000
//   });

//   // interceptors.js 파일에서 apiURL===instance로 연결
//   return setInterceptors(apiURL);
// }

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
// 참고
// GET - posts
// POST - posts
// PUT - posts {id}
// DELETE - posts {id}

export { downloadItem };
