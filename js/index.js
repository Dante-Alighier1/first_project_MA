const menuBtn = document.querySelector('.menu-btn');
const headerMenu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  headerMenu.classList.toggle('active');
});