// 粒子动效
particlesJS("particles-js", {
  "particles": {
    "number": {"value": 80},
    "color": {"value": "#00ffcc"},
    "shape": {"type": "circle"},
    "opacity": {"value": 0.5},
    "size": {"value": 3},
    "line_linked": {"enable": true, "distance": 150, "color": "#00ffcc", "opacity":0.4, "width":1},
    "move": {"enable": true, "speed": 4, "direction": "none", "random": true, "straight": false, "out_mode": "out"}
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {"enable": true, "mode": "grab"},
      "onclick": {"enable": true, "mode": "push"}
    },
    "modes": {
      "grab": {"distance": 140, "line_linked": {"opacity": 1}},
      "push": {"particles_nb": 4}
    }
  },
  "retina_detect": true
});

// 登录按钮逻辑
document.addEventListener("DOMContentLoaded", function(){
    const loginBtn = document.getElementById("loginBtn");
    if(loginBtn){
        loginBtn.addEventListener("click", function(){
            window.location.href = "login.html";
        });
    }

    // About 页面显示重要的人
    const importantPeople = document.getElementById("importantPeople");
    const lockedMessage = document.getElementById("lockedMessage");
    if(importantPeople && lockedMessage){
        if(localStorage.getItem("loggedInUser")){
            importantPeople.style.display = "block";
            lockedMessage.style.display = "none";
        }
    }
});
