// 打字机效果
const typedText = document.getElementById('typed-text');
const text = "欢迎来到奕博浩的个人网站！";
let index = 0;

function type() {
    if (index < text.length) {
        typedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}
document.addEventListener('DOMContentLoaded', type);

// 登录模态框
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');

loginBtn.onclick = () => loginModal.style.display = "block";
closeModal.onclick = () => loginModal.style.display = "none";
window.onclick = (e) => { if (e.target === loginModal) loginModal.style.display = "none"; }
