document.addEventListener("DOMContentLoaded", () => {

/* =======================
   🎞 СЛАЙДЕР (ЧИСТИЙ)
======================= */

const slides = document.querySelectorAll(".slide");
let index = 0;

// якщо є слайди — показати перший
if (slides.length) {
    slides[0].classList.add("active");
}

function nextSlide() {

    slides[index].classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");
}

// 🔥 ОДИН інтервал (це правильно)
setInterval(nextSlide, 3000);


/* =======================
   ✨ FADE-IN при скролі
======================= */

const faders = document.querySelectorAll(".fade");

function checkFade() {
    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkFade);
checkFade();


/* =======================
   🔍 ПОШУК КРАЇН
======================= */

window.filterCountries = function () {
    const input = document.getElementById("search");
    if (!input) return;

    const value = input.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(value)
            ? "block"
            : "none";
    });
};

});