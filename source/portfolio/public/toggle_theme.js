// toggles between light and dark theme

// get the current theme
function getTheme() {
    // check if class theme is set, light or dark
    let classList = document.body.classList;
    let classTheme = classList.contains('light') ? 'light' : classList.contains('dark') ? 'dark' : null;
    if (classTheme) {
        return classTheme;
    }

    // check if local storage has a theme set
    let localTheme = localStorage.getItem('theme');
    if (localTheme) {
        return localTheme;
    }

    // check if the browser has a theme set
    let browserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : null;
    browserTheme = browserTheme || window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : null;
    if (browserTheme) {
        return browserTheme;
    }

    // default to dark theme
    return 'dark';
}

// set the theme
function setTheme(theme) {
    // set the class theme
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);

    // print classList for debugging
    console.log(document.body.classList);

    // set the local storage theme
    localStorage.setItem('theme', theme);
}

// toggle the theme
function toggleTheme() {
    let theme = getTheme();
    console.log(`Current theme is ${theme}`);
    theme = theme === 'light' ? 'dark' : 'light';
    setTheme(theme);

    console.log(`Theme set to ${theme}`);
}


// initialize the theme
function initTheme() {
    let theme = getTheme();
    setTheme(theme);
}

// initialize the theme
document.addEventListener('DOMContentLoaded', initTheme);