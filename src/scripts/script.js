const toggleSwitch = document.querySelector('input[type="checkbox"]') //ELEMENT: toggle switch for darkmode/lightmode

// EVENT LISTENERS & HANDLERS //
toggleSwitch.onchange = function (e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light')
    }
}