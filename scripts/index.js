const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

const checkboxElm = document.getElementById('checkbox');
const moonElm = document.getElementById('moon');
const sunElm = document.getElementById('sun');

const menuBtnElm = document.getElementById('menu-btn');
const crossBtnElm = document.getElementById('menu-btn-cross');
const navElm = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');

const modalCrossElm = document.getElementById('close-modal');

//dark & light theme toggle
function iconMode(color) {
  menuBtnElm.src = `../assets/hamburger-${color}.png`;
  crossBtnElm.src = `../assets/cross-${color}.png`;
  modalCrossElm.src = `../assets/cross-${color}.png`;
}

function toggleDarkLightMode(isDark) {
  isDark === DARK_THEME
    ? moonElm.classList.replace('show-icon', 'hide-icon')
    : moonElm.classList.replace('hide-icon', 'show-icon');
  isDark === DARK_THEME
    ? sunElm.classList.replace('hide-icon', 'show-icon')
    : sunElm.classList.replace('show-icon', 'hide-icon');
  isDark === DARK_THEME ? iconMode(DARK_THEME) : iconMode(LIGHT_THEME);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  window.localStorage.setItem('theme', theme);
  toggleDarkLightMode(theme);
}

function changeTheme(event) {
  if (event.target.checked) {
    setTheme(DARK_THEME);
  } else {
    setTheme(LIGHT_THEME);
  }
}

checkboxElm.addEventListener('click', changeTheme);

//set dark/light mode according to user preference
function setThemeOnLoad() {
  let themePreference = window.localStorage.getItem('theme');
  switch (themePreference) {
    case DARK_THEME:
      checkboxElm.checked = true;
      setTheme(DARK_THEME);
      break;
    case LIGHT_THEME:
      setTheme(LIGHT_THEME);
      break;
  }
}

setThemeOnLoad();

// hamburger menu toggle
function toggleMenu(event) {
  if (event.target.id == 'menu-btn') {
    navElm.classList.add('nav-visible');
    menuBtnElm.classList.remove('menu-btn-show');
    crossBtnElm.classList.add('menu-btn-show');
  } else {
    navElm.classList.remove('nav-visible');
    menuBtnElm.classList.add('menu-btn-show');
    crossBtnElm.classList.remove('menu-btn-show');
  }
}

menuBtnElm.addEventListener('click', toggleMenu);
crossBtnElm.addEventListener('click', toggleMenu);

//mark menu link as active
function markActive(event) {
  navLinks.forEach((item) => item.classList.remove('active'));
  event.target.classList.add('active');
  toggleMenu(event);
}

navLinks.forEach((item) => item.addEventListener('click', markActive));
