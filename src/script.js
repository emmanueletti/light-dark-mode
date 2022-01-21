// Cached DOM elements
const toggleSwitch = document.querySelector('input[type=checkbox]');
const rootDocument = document.documentElement;

// Switch theme dynamically
const switchTheme = (e) => {
  const userWantsDarkMode = e.target.checked;
  if (userWantsDarkMode) {
    rootDocument.setAttribute('data-theme', 'dark');
  } else {
    rootDocument.removeAttribute('data-theme');
  }
};

// Event listener
toggleSwitch.addEventListener('change', switchTheme);
