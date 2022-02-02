// var loader = document.getElementById("preloader");
// window.addEventListener("load",
//     setTimeout(myPage, 3000))

// function myPage() {
//     loader.style.display = 'none';
// }


/* ------------------- Preloader code ------------------- */
window.addEventListener("load",
    setTimeout(() => {
        loader = document.getElementById("preloader");
        loader.style.display = 'none';
    }, 3250))