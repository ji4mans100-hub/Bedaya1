(function () {
  const AUTH_KEY = "bedaya_auth_ok";

  if (sessionStorage.getItem(AUTH_KEY) !== "true") {
    window.location.href = "auth/login.html";
  }
})();