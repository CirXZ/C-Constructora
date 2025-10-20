// Archivo con funcionalidades extras


let prevScrollpos = window.pageYOffset;
console.log(prevScrollpos)
const navbar = document.getElementById("navbar-principal");

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        // Scroll hacia arriba: mostrar navbar
        navbar.classList.remove("navbar-hidden")
    } else {
        navbar.classList.add("navbar-hidden")
    }

    prevScrollpos = currentScrollPos;
};
