"use strict"
let goTopBtn = document.querySelector('.back-to-top');

window.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
});

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function trackScroll(btn) {
    window.addEventListener('scroll', function(){
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;
    
        if (scrolled > coords) {
            goTopBtn.classList.add('show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('show');
        }
    })
}