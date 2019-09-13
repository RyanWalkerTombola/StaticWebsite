function onLoad() {
    loadTheme();
    // moveHeader();
}

// function moveHeader() {
//     var elem = document.getElementById(id="headerMove")
//     var time = 0;
//     var id = setInterval(frame, 5);
//     function frame() {
//         if (time == 120) {
//             clearInterval(id);
//         } else {
//             time++;
//             elem.style.top = easeIn(time, 100, -200, 120);
//             elem.style.opacity = easeIn(time, -0.5, 1.5, 120 );
//         }
//     }
// }

function easeIn (time, startValue, deltaValue, duration) {
    time /= duration;
    return -deltaValue * time*(time-2) + startValue;
}

function toggleNavbar() {
    document.getElementById('sideNav').classList.toggle('active');
}

let themes = ['lightgrey', 'dodgerblue', 'lightsteelblue', 'orangered'];

function loadTheme() {
    var theme = sessionStorage.getItem('theme');
    if (theme == null) {theme = 'lightgrey';}
    document.documentElement.style.setProperty('--theme-color', theme);
    var themeSelect = document.getElementById("theme_select"); 
    themeSelect.selectedIndex = themes.indexOf(theme);
}

function changeTheme() {
    var themeSelect = document.getElementById("theme_select");
    var theme = themes[themeSelect.selectedIndex];
    document.documentElement.style.setProperty('--theme-color', theme);
    sessionStorage.setItem('theme', theme);
}