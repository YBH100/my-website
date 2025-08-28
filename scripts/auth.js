// 用户列表，可以自己扩展
const users = [
  { username: "YiBoho", password: "123456", role: "admin" }
];

// 登录状态存储
function login(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    return true;
  }
  return false;
}

function getLoggedInUser() {
  return JSON.parse(localStorage.getItem("loggedInUser"));
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.reload();
}

// 页面加载时检查权限
document.addEventListener("DOMContentLoaded", () => {
  const user = getLoggedInUser();

  // 关于我页面：显示重要的人
  const importantSection = document.getElementById("important-people");
  if (importantSection && user) {
    importantSection.classList.remove("hidden");
  }

  // 登录模态逻辑
  const loginLink = document.getElementById("login-link");
  const loginModal = document.getElementById("login-modal");
  const closeModal = document.getElementById("close-modal");

  if (loginLink) {
    loginLink.addEventListener("click", () => {
      loginModal.classList.remove("hidden");
    });
  }
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      loginModal.classList.add("hidden");
    });
  }

  // 登录表单
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const status = document.getElementById("login-status");

      if (login(username, password)) {
        status.textContent = "登录成功！";
        setTimeout(() => window.location.reload(), 800);
      } else {
        status.textContent = "用户名或密码错误";
      }
    });
  }
});
