function moveHeader() {
    var elem = document.getElementById(id="headerMove")
    var time = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (time == 120) {
            clearInterval(id);
        } else {
            time++;
            elem.style.top = easeIn(time, 100, -200, 120);
            elem.style.opacity = easeIn(time, -0.5, 1.5, 120);
        }
    }
}

function easeIn (time, startValue, deltaValue, duration) {
    time /= duration;
    return -deltaValue * time*(time-2) + startValue;
}

function toggleNavbar() {
    document.getElementById('sideNav').classList.toggle('active');
}