document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelector('.slides');
    const slideElements = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentSlide = 0;
    const slideCount = slideElements.length;
    
    // 自动轮播间隔（毫秒）
    const autoPlayInterval = 5000;
    let autoPlayTimer;

    function updateSlidePosition() {
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // 更新圆点状态
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlidePosition();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlidePosition();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlidePosition();
        resetAutoPlay();
    }

    function resetAutoPlay() {
        clearInterval(autoPlayTimer);
        autoPlayTimer = setInterval(nextSlide, autoPlayInterval);
    }

    // 事件监听器
    prevButton.addEventListener('click', () => {
        prevSlide();
        resetAutoPlay();
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        resetAutoPlay();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    // 触摸滑动支持
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            nextSlide();
        } else if (touchEndX - touchStartX > 50) {
            prevSlide();
        }
    });

    // 启动自动播放
    resetAutoPlay();
}); 