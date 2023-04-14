const toggleSwitch = document.querySelector('input[type="checkbox"]') //ELEMENT: toggle switch for darkmode/lightmode

// EVENT LISTENERS & HANDLERS //
toggleSwitch.onchange = function (e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light');
    }
}

function setThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      toggleSwitch.checked = savedTheme === 'dark';
    }
}

document.addEventListener('DOMContentLoaded', setThemeFromLocalStorage);
