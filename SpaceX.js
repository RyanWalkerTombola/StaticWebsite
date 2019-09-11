function onLoad() {
    var theme = sessionStorage.getItem('theme');
    document.documentElement.style.setProperty('--theme-color', theme);
}