// 登录模态框逻辑
const loginModal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const closeBtn = document.querySelector(".close-btn");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("login-message");

let isLoggedIn = false;

// 打开模态框
if (loginBtn) {
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      loginModal.style.display = "flex";
    } else {
      // 如果已经登录，点击就是注销
      isLoggedIn = false;
      loginBtn.textContent = "登录";
      alert("您已退出登录");
    }
  });
}

// 关闭模态框
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
    isLoggedIn = true;
    loginMessage.style.color = "#00ff99";
    loginMessage.textContent = "✅ 登录成功！欢迎管理员。";

    setTimeout(() => {
      loginModal.style.display = "none";
      loginBtn.textContent = "YiBoho | 注销"; // 登录后按钮改成用户名
    }, 1000);
  } else {
    loginMessage.style.color = "#ff4d4d";
    loginMessage.textContent = "❌ 用户名或密码错误！";
  }
});

// 登录成功时解锁“重要的人”
const lockedOverlay = document.getElementById("lockedOverlay");
if (lockedOverlay) {
  lockedOverlay.classList.add("hidden");
}
