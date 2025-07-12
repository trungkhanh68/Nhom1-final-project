function trangdangnhap() {
  window.location.href = "login.html";
}
function trangdangky() {
  window.location.href = "register.html";
}

function register() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!username || !email || !password) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  const user = {
    username,
    email,
    password,
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Đăng ký thành công!");
  window.location.href = "login.html";
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!");
    return;
  }

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Chưa có tài khoản, vui lòng đăng ký!");
    return;
  }

  if (username === user.username && password === user.password) {
    alert("Đăng nhập thành công!");
    localStorage.setItem("loggedInUser", username);
    window.location.href = "baicuoikhoa1.html";
  } else {
    alert("Tên đăng nhập hoặc mật khẩu sai!");
  }
}

function goToLogin() {
  window.location.href = "login.html";
}
function comeback() {
  window.location.href = "baicuoikhoa.html";
}
window.onload = function () {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const userArea = document.getElementById("userArea");

  if (loggedInUser) {
    userArea.innerHTML = `<span>👋 Xin chào, <b>${loggedInUser}</b></span>`;
  }
};
