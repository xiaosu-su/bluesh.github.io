const text = "再不赶回去春天就没有了，因为江水流春去欲尽，生命是去欲尽";
let index = 0;

function typeText() {
    const typingText = document.getElementById('typing-text');
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(() => {
            typingText.textContent = '';
            index = 0;
            typeText();
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', typeText); 

// 滚动动画
function revealOnScroll() {
    const sections = document.querySelectorAll('.project-section');
    
    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
            section.classList.add('fade-in');
        }
    });
}

// 监听滚动事件
window.addEventListener('scroll', revealOnScroll);

// 页面加载完成后立即显示可见的项目
document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
    
    // 添加鼠标移动视差效果
    document.addEventListener('mousemove', (e) => {
        const avatar = document.querySelector('.avatar');
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        if (avatar) {
            avatar.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});