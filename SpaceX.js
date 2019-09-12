function onLoad() {
    loadTheme();
}

function loadTheme () {
    var theme = sessionStorage.getItem('theme');
    if (theme == null) {theme = 'lightgrey';}
    document.documentElement.style.setProperty('--theme-color', theme);
}