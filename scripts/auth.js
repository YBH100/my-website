document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const loginModal = document.getElementById("loginModal");
  const closeBtn = document.querySelector(".modal .close");
  const loginSubmit = document.getElementById("loginSubmit");
  const loginMessage = document.getElementById("loginMessage");

  if (!loginBtn || !loginModal || !closeBtn || !loginSubmit) return;

  // 登录按钮点击事件
  loginBtn.addEventListener("click", () => loginModal.style.display = "block");

  // 关闭按钮点击事件
  closeBtn.addEventListener("click", () => loginModal.style.display = "none");

  // 登录提交
  loginSubmit.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "YiBoho" && password === "123456") {
      localStorage.setItem("isLoggedIn", "true");
      loginMessage.style.color = "#00ff99";
      loginMessage.textContent = "✅ 登录成功！";

      setTimeout(() => {
        loginModal.style.display = "none";
        loginBtn.textContent = "YiBoho | 注销";

        const lockedOverlay = document.getElementById("lockedOverlay");
        if (lockedOverlay) lockedOverlay.classList.add("hidden");
      }, 1000);
    } else {
      loginMessage.style.color = "#ff5555";
      loginMessage.textContent = "用户名或密码错误";
    }
  });

  // 页面刷新后检查登录状态
  if (localStorage.getItem("isLoggedIn") === "true") {
    loginBtn.textContent = "YiBoho | 注销";
    const lockedOverlay = document.getElementById("lockedOverlay");
    if (lockedOverlay) lockedOverlay.classList.add("hidden");
  }
});
