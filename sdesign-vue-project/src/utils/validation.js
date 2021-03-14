// 이메일 유효성 검사를 위한 정규표현식
const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validatePassword = (password) => {
  const re = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,15}$/;
  return re.test(String(password));
}

export { validateEmail, validatePassword };
