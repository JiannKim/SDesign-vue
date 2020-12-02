function saveAuthToCookie(value) {
  document.cookie = `sd_auth=${value}`;
}

function saveUserToCookie(value) {
  document.cookie = `sd_user=${value}`;
}

function getAuthFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)sd_auth\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
}

function getUserFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)sd_user\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
}

// function deleteCookie(value) {
//   document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
// }

export {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
  // deleteCookie,
};
