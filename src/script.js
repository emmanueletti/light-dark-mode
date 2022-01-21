// Cached DOM elements
const rootDocument = document.documentElement;
const toggleSwitch = document.querySelector('input[type=checkbox]');
const nav = document.getElementById('nav');
const toggleIconContainer = document.getElementById('toggle-icon-container');
const toggleText = toggleIconContainer.children[0];
const toggleIcon = toggleIconContainer.children[1];
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// constants
const THEME_VALUES = {
  LIGHT: {
    NAV_BACKGROUND: 'rgb(255 255 255 / 50%)',
    TEXT_BOX: 'rgb(0 0 0 / 50%)',
    TOGGLE_TEXT: 'Light Mode',
    TOGGLE_ICON: 'fa-sun',
    IMAGE_1_SRC: '/src/assets/img/undraw_proud_coder_light.svg',
    IMAGE_2_SRC: '/src/assets/img/undraw_feeling_proud_light.svg',
    IMAGE_3_SRC: '/src/assets/img/undraw_conceptual_idea_light.svg',
  },
  DARK: {
    NAV_BACKGROUND: 'rgb(0 0 0 / 50%)',
    TEXT_BOX: 'rgb(255 255 255 / 50%)',
    TOGGLE_TEXT: 'Dark Mode',
    TOGGLE_ICON: 'fa-moon',
    IMAGE_1_SRC: '/src/assets/img/undraw_proud_coder_dark.svg',
    IMAGE_2_SRC: '/src/assets/img/undraw_feeling_proud_dark.svg',
    IMAGE_3_SRC: '/src/assets/img/undraw_conceptual_idea_dark.svg',
  },
};

const saveThemeToLocalStorage = (value) => {
  localStorage.setItem('themePref', value);
};

const initializeTheme = () => {
  const savedTheme = localStorage.getItem('themePref') ?? 'LIGHT';
  toggleDarkLightTheme(savedTheme);
  if (savedTheme === 'DARK') {
    toggleSwitch.checked = true;
  }
};

const toggleDarkLightTheme = (theme) => {
  nav.style.backgroundColor = THEME_VALUES[theme].NAV_BACKGROUND;
  textBox.style.backgroundColor = THEME_VALUES[theme].TEXT_BOX;
  toggleText.textContent = THEME_VALUES[theme].TOGGLE_TEXT;

  toggleIcon.classList.replace(
    THEME_VALUES.LIGHT.TOGGLE_ICON,
    THEME_VALUES[theme].TOGGLE_ICON
  );

  image1.src = THEME_VALUES[theme].IMAGE_1_SRC;
  image2.src = THEME_VALUES[theme].IMAGE_2_SRC;
  image3.src = THEME_VALUES[theme].IMAGE_3_SRC;

  theme === 'DARK'
    ? rootDocument.setAttribute('data-theme', 'dark')
    : rootDocument.removeAttribute('data-theme');
};

// Switch theme dynamically
const switchTheme = (e) => {
  const userWantsDarkMode = e.target.checked;
  const theme = userWantsDarkMode ? 'DARK' : 'LIGHT';
  toggleDarkLightTheme(theme);
  saveThemeToLocalStorage(theme);
};

// Event listener
window.addEventListener('load', initializeTheme);
toggleSwitch.addEventListener('change', switchTheme);
