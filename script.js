document.addEventListener("DOMContentLoaded", function () {

    const slideTrack = document.querySelector(".slideTrack");
    const slides = document.querySelectorAll(".slideImage");
    const prevBtn = document.querySelector(".prevBtn");
    const nextBtn = document.querySelector(".nextBtn");

    if (!slideTrack || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlide() {
        slideTrack.style.transform =
            "translateX(-" + (currentIndex * 100) + "%)";
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        updateSlide();
    }

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }
        updateSlide();
    }

    // 자동 슬라이드 (5초)
    let autoSlide = setInterval(nextSlide, 5000);

    // 버튼 이벤트
    nextBtn.addEventListener("click", function () {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", function () {
        prevSlide();
        resetAutoSlide();
    });

    // 버튼 클릭 시 자동 타이머 리셋
    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 5000);
    }

});
