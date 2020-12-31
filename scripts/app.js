
  
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

nav.addEventListener('click', function() {
    nav.classList.toggle('active');
});

