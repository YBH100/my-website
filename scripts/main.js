// 登录逻辑
const loginBtn = document.getElementById('login-btn');
const modal = document.getElementById('login-modal');
const closeBtn = modal.querySelector('.close');
const loginSubmit = document.getElementById('login-submit');
const loginMsg = document.getElementById('login-msg');

let currentUser = null;

loginBtn.onclick = () => modal.style.display = 'flex';
closeBtn.onclick = () => modal.style.display = 'none';

loginSubmit.onclick = () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // 简单示例
  if(username === 'YiBoho' && password === 'admin') {
    currentUser = username;
    loginMsg.textContent = '登录成功！';
    modal.style.display = 'none';
    alert('欢迎，管理员！');
  } else {
    loginMsg.textContent = '用户名或密码错误';
  }
};

// 关于我页面访问控制示例
function checkImportantAccess() {
  if(currentUser !== 'YiBoho') {
    document.querySelectorAll('.important-person').forEach(el => {
      el.textContent = '请登录后查看';
    });
  }
}

// 粒子初始化
particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: "none", out_mode: "bounce" }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" }
    },
    modes: { grab: { distance: 150, line_linked: { opacity: 1 } } }
  },
  retina_detect: true
});
