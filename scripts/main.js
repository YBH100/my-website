// 移动端菜单切换
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav ul');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// 项目过滤功能
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // 移除所有按钮的active类
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // 为当前按钮添加active类
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        // 遍历所有项目卡片
        projectCards.forEach(card => {
          if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
  
  // 联系表单提交
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 获取表单数据
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };
      
      // 这里可以添加表单验证
      
      // 模拟表单提交（实际项目中应替换为真实API）
      console.log('表单提交数据:', formData);
      alert('消息已发送！我会尽快回复您。');
      contactForm.reset();
    });
  }
});

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href') === '#') return;
    
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // 移动端关闭菜单
      if (navMenu && navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
      }
    }
  });
});
