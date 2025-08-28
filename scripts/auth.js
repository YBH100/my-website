const loginForm = document.getElementById('loginForm');
const loginMsg = document.getElementById('loginMsg');

const users = {
    'YiBoho': '123456'  // 管理员账号
};

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] && users[username] === password) {
        loginMsg.style.color = 'green';
        loginMsg.textContent = '登录成功！';
        localStorage.setItem('loggedUser', username);
        loginModal.style.display = 'none';
    } else {
        loginMsg.style.color = 'red';
        loginMsg.textContent = '用户名或密码错误！';
    }
});
