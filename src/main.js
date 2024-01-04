import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/pre_load.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/discover.css';
import '../styles/components/season_img.css';
import '../styles/components/review.css'
import '../styles/components/footer.css';
import '../styles/utils.css';



// hambuger menu
const hambuger = document.querySelector('.hambuger');
const navMenu = document.querySelector('.header__menu');

hambuger.addEventListener("click", () => {
    hambuger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".header__link").forEach(n => n.addEventListener("click", () => {
    hambuger.classList.remove('active');
    navMenu.classList.remove('active');
}))

// gsap
// gsap.to(".pre_load", {
//     y: -1000,
//     duration: 1,
//     delay:5.7,
// })

// gsap.from('.header',{
//     x:-300,
//     opacity:0,
//     duration:3,
//     delay:6,
// })
// gsap.from('.hero',{
//     x:300,
//     opacity:0,
//     duration:3,
//     delay:6.3,
// })

// gsap.from(".header", {
//     y: -100,
//     duration: 1
// })
// gsap.from(".hero__txt h2", {
//     x: 100,
//     opacity: 0,
//     duration: 1.3,
//     delay: 1
// })
// gsap.from(".hero__txt p", {
//     x: -100,
//     opacity: 0,
//     duration: 1.4,
//     delay: 1.4
// })
// gsap.from(".hero__txt .hero__btn", {
//     y: 100,
//     opacity: 0,
//     duration: 1.4,
//     delay: 1.5
// })

let a = document.querySelector('.onclick')
let b = document.querySelector('.input')
a.addEventListener('click', function (e) {
    b.style.display = 'block'
    a.style.display = 'none'
})





// swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



// pre-load
document.addEventListener("DOMContentLoaded", function () {
    var loadingContainer = document.getElementById("loadingContainer");
    var loadingNumber = document.getElementById("loadingNumber");
    var percentage = 0;

    function updateLoading() {
        loadingNumber.textContent = percentage + "%";
        percentage += 1;

        if (percentage > 100) {
            clearInterval(loadingInterval);
            loadingContainer.style.opacity = 0; // Fade out smoothly
            setTimeout(function () {
                loadingContainer.style.display = 'none';
            }, 500);
        }
    }

    var loadingInterval = setInterval(updateLoading, 50);
});