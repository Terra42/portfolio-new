const checkboxElm = document.getElementById('checkbox');
const moonElm = document.getElementById('moon');
const sunElm = document.getElementById('sun');

const menuBtnElm = document.getElementById('menu-btn');
const crossBtnElm = document.getElementById('menu-btn-cross');
const navElm = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');

const modalCrossElm = document.getElementById('close-modal');

//dark & light theme toggle
function changeTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('theme', 'dark');
    moonElm.classList.add('hide-icon');
    moonElm.classList.remove('show-icon');
    sunElm.classList.add('show-icon');
    sunElm.classList.remove('hide-icon');
    menuBtnElm.src = '../assets/hamburger-dark.png';
    crossBtnElm.src = '../assets/cross-dark.png';
    modalCrossElm.src = '../assets/cross-dark.png';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    window.localStorage.setItem('theme', 'light');
    moonElm.classList.add('show-icon');
    moonElm.classList.remove('hide-icon');
    sunElm.classList.add('hide-icon');
    sunElm.classList.remove('show-icon');
    menuBtnElm.src = '../assets/hamburger.png';
    crossBtnElm.src = '../assets/cross.png';
    modalCrossElm.src = '../assets/cross.png';
  }
}

checkboxElm.addEventListener('click', changeTheme);

// hamburger menu
let isOpened = false;

function openMenu() {
  isOpened = true;
  navElm.classList.add('nav-visible');
  menuBtnElm.classList.remove('menu-btn-show');
  crossBtnElm.classList.add('menu-btn-show');
}

function closeMenu() {
  if (isOpened) {
    navElm.classList.remove('nav-visible');
    menuBtnElm.classList.add('menu-btn-show');
    crossBtnElm.classList.remove('menu-btn-show');
    isOpened = false;
  }
  console.log(isOpened);
}

menuBtnElm.addEventListener('click', openMenu);
crossBtnElm.addEventListener('click', closeMenu);

//mark menu link as active
const markActive = (event) => {
  navLinks.forEach((item) => item.classList.remove('active'));
  event.target.classList.add('active');
  closeMenu();
};

navLinks.forEach((item) => item.addEventListener('click', markActive));
