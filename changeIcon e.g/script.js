const darkMode = document.querySelector(".dmode");

function ChangeIcon() {
    const moon = document.querySelector(".toggleSun")
    moon.classList.toggle("sun");
    changeStyle();
}


darkMode.addEventListener("click", ChangeIcon);

// ChangeIcon();


/* ----------------- Selectores inciales ---------------- */
const html = document.querySelector('html');
const bg = document.querySelector('.content');

/* ------------ get styles from css variables ----------- */
const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)




const darkStyle = {
    bg: getStyle(html, '--black'),
    color: getStyle(html, '--white')
}

const lightStyle = {
    bg: getStyle(html, '--white'),
    color: getStyle(html, '--black')
}

/* ----------------- change contentcolor ---------------- */

var statusA = 0; // 0 = Dark mode, 1 = Light mode

function changeStyle() {
    if (statusA == 0) {
        bg.style.backgroundColor = darkStyle.bg;
        bg.style.color = darkStyle.color;

        statusA = 1;
    } else if (statusA == 1) {
        bg.style.backgroundColor = lightStyle.bg;
        bg.style.color = lightStyle.color;
        statusA = 0;
    }
}