const checkboxElm = document.getElementById('checkbox');
const moonElm = document.getElementById('moon');
const sunElm = document.getElementById('sun');

const menuBtnElm = document.getElementById('menu-btn');
const crossBtnElm = document.getElementById('menu-btn-cross');
const navElm = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');

//dark & light theme toggle
function changeTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('theme', 'dark');
    moonElm.classList.add('hide-icon');
    moonElm.classList.remove('show-icon');
    sunElm.classList.add('show-icon');
    sunElm.classList.remove('hide-icon');
    menuBtnElm.src = '../assets/hamburger-dark.svg';
    crossBtnElm.src = '../assets/cross-dark.svg';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    window.localStorage.setItem('theme', 'light');
    moonElm.classList.add('show-icon');
    moonElm.classList.remove('hide-icon');
    sunElm.classList.add('hide-icon');
    sunElm.classList.remove('show-icon');
    menuBtnElm.src = '../assets/hamburger.svg';
    crossBtnElm.src = '../assets/cross.svg';
  }
}

checkboxElm.addEventListener('click', changeTheme);

// hamburger menu
function openMenu() {
  navElm.style.visibility = 'visible';
  menuBtnElm.style.display = 'none';
  crossBtnElm.style.display = 'inline-block';
}

function closeMenu() {
  navElm.style.visibility = 'hidden';
  menuBtnElm.style.display = 'inline-block';
  crossBtnElm.style.display = 'none';
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
