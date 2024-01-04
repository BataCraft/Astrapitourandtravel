import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/about/hero.css'
import '../styles/components/header.css';
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

let a = document.querySelector('.onclick')
let b = document.querySelector('.input')
a.addEventListener('click', function (e) {
    b.style.display = 'block'
    a.style.display = 'none'
})

