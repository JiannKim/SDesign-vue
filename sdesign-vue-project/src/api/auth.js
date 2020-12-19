// 로그인, 회원가입, (ex)회원 탈퇴 계정과 관련된 api 함수 파일
import { instance } from "@/api";

// signup api 요청 메서드
const registerUser = (joinInfo) => {
  return instance.post("/create/account", joinInfo);
};
// login api 요청 메서드
const loginUser = (loginInfo) => {
  return instance.post("/login", loginInfo);
};

export { registerUser, loginUser };
