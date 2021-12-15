function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    BUTTON.classList.toggle(DARK_MODE_CLASS);
    H1.classList.toggle(DARK_MODE_CLASS);
    BODY.classList.toggle(DARK_MODE_CLASS);
    FOOTER.classList.toggle(DARK_MODE_CLASS);
}

function changeText() {

    const LIGHT_MODE = 'Light Mode';
    const DARK_MODE = 'Dark Mode';

    if(BODY.classList.contains(DARK_MODE_CLASS)) {
        BUTTON.innerHTML = LIGHT_MODE;
        H1.innerHTML = DARK_MODE + ' ON';
        return;
    }

    BUTTON.innerHTML = DARK_MODE;
    H1.innerHTML = LIGHT_MODE + ' ON';
}

const DARK_MODE_CLASS = 'dark-mode';
const BUTTON = document.getElementById('mode-selector');
const H1 = document.getElementById('page-title');
const BODY = document.getElementsByTagName('body')[0];
const FOOTER = document.getElementsByTagName('footer')[0];

BUTTON.addEventListener('click', changeMode);