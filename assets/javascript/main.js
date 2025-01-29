// Номер телефона

const phoneInput = document.getElementById("phone");
phoneInput.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^0-9\+\-\(\)\s]/g, "");
});

// Слайдер

const sliderContainer = document.querySelector(".slider-container");

let isDown = false;
let startX;
let scrollLeft;

sliderContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    sliderContainer.classList.add("active");
    startX = e.pageX - sliderContainer.offsetLeft;
    scrollLeft = sliderContainer.scrollLeft;
});

sliderContainer.addEventListener("mouseleave", () => {
    isDown = false;
    sliderContainer.classList.remove("active");
});

sliderContainer.addEventListener("mouseup", () => {
    isDown = false;
    sliderContainer.classList.remove("active");
});

sliderContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderContainer.offsetLeft;
    const walk = (x - startX) * 1; // Скорость прокрутки
    sliderContainer.scrollLeft = scrollLeft - walk;
});

// Поддержка тач-событий для телефонов
sliderContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX - sliderContainer.offsetLeft;
    scrollLeft = sliderContainer.scrollLeft;
});

sliderContainer.addEventListener("touchmove", (e) => {
    const x = e.touches[0].pageX - sliderContainer.offsetLeft;
    const walk = (x - startX) * 1; // Скорость прокрутки
    sliderContainer.scrollLeft = scrollLeft - walk;
});


// Бургер

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация анимации
    const animation = lottie.loadAnimation({
        container: document.getElementById('lottie-burger'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'assets/javascript/menuV2.json' // Укажите правильный путь
    });

    // Получаем кнопку и целевое меню
    const toggleButton = document.querySelector('[data-bs-target="#navbarNav"]');
    const menu = document.getElementById('navbarNav');

    // Обработчики событий для меню
    menu.addEventListener('show.bs.collapse', () => {
        animation.setDirection(1);
        animation.play();
    });

    menu.addEventListener('hide.bs.collapse', () => {
        animation.setDirection(-1);
        animation.play();
    });

    // Сброс анимации при загрузке
    animation.goToAndStop(0, true);
});