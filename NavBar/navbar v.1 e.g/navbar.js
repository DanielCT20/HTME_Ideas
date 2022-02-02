function BarNavegation() {

    const dinav = document.querySelector(".dinav");
    const classNav = document.querySelector("#nav-menu").classList;
    dinav.addEventListener("click", function() {
        classNav.toggle("nav-menu");

    })

}

BarNavegation()


// function hidden() {
//     const hide = document.querySelector(".navunlist");
//     const idnavunlist = document.querySelector("#idnavunlist").classList;
//     hide.addEventListener("click", function() {
//         idnavunlist.toggle("nav-menu");

//     })
// }

// hidden()


function name() {
    const x = document.querySelectorAll('.listnav a');
    const classNav = document.querySelector("#nav-menu").classList;

    x.addEventListener('click', function() {
        classNav.toggle("nav-menu");

    });

}