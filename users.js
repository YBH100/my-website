const users = {
    "YiBoho": "123456",
    "guest": "guest"
};

document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("loginForm");
    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const status = document.getElementById("loginStatus");

            if(users[username] && users[username] === password){
                localStorage.setItem("loggedInUser", username);
                status.innerText = "登录成功！";
                setTimeout(()=>{ window.location.href = "about.html"; }, 1000);
            }else{
                status.innerText = "用户名或密码错误";
            }
        });
    }
});
