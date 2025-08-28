// 登录系统（简单示例）
const users = {
    'YiBoho': 'admin123'
};

document.getElementById('loginForm')?.addEventListener('submit', function(e){
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const msg = document.getElementById('loginMsg');

    if(users[username] && users[username] === password){
        msg.innerText = '登录成功！';
        msg.style.color = 'lime';
        localStorage.setItem('loggedUser', username);
        setTimeout(()=>location.reload(), 1000);
    } else {
        msg.innerText = '用户名或密码错误';
        msg.style.color = 'red';
    }
});
