import "./styles.css";
import menu from './menu.json';
import menuTemplate from './templates/food-item.hbs';

const menuRef = document.querySelector('.js-menu');
const markup = menuTemplate(menu);
menuRef.insertAdjacentHTML('beforeend', markup);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };


const themeSwitch = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

themeSwitch.addEventListener('change', changeTheme);
document.addEventListener('DOMContentLoaded', getThemefromLocalStorage);

function changeTheme(e) {
    if(themeSwitch.checked){
        setDarkTheme();
    } else {
        setLightTheme()
    }
}
function setDarkTheme () {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem("theme", Theme.DARK);
}
function setLightTheme () {
    body.classList.add(Theme.LIGTH);
    body.classList.remove(Theme.DARK);
    localStorage.setItem("theme", Theme.LIGHT);
}
function getThemefromLocalStorage() {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === Theme.DARK) {
        body.classList.add(Theme.DARK);
        themeSwitch.checked = true;
    }
}