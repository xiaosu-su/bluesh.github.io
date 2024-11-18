document.addEventListener('DOMContentLoaded', function() {
    // 技能条动画
    function animateSkills() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = progress + '%';
            }, 200);
        });
    }

    // 滚动动画
    function revealOnScroll() {
        const sections = document.querySelectorAll('.about-section');
        sections.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.85) {
                section.classList.add('visible');
                if (section.classList.contains('skills-section')) {
                    animateSkills();
                }
            }
        });
    }

    // 监听滚动事件
    window.addEventListener('scroll', revealOnScroll);
    
    // 页面加载时执行一次
    revealOnScroll();
}); 