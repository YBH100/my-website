// 登录模态框逻辑
const loginModal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const closeBtn = document.querySelector(".close-btn");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("login-message");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    loginModal.style.display = "flex";
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    loginModal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
});

// 登录验证逻辑
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "YiBoho" && password === "123456") {
    loginMessage.style.color = "#00ff99";
    loginMessage.textContent = "✅ 登录成功！欢迎管理员。";
    setTimeout(() => {
      loginModal.style.display = "none";
    }, 1500);
  } else {
    loginMessage.style.color = "#ff4d4d";
    loginMessage.textContent = "❌ 用户名或密码错误！";
  }
});
