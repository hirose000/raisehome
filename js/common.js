const hamburgerButton = document.querySelector('.hamburger-button');
const hamburgerBar = document.querySelector('.hamburger-button__bar');
const headerNav = document.querySelector('.menu');

function hamburgerActivate() {
    hamburgerButton.classList.toggle("active");
    hamburgerBar.classList.toggle("active");
    headerNav.classList.toggle("active");
};

hamburgerButton.addEventListener('click', hamburgerActivate);

