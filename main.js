const smallMenu = document.querySelector(".container");
const emailUser = document.querySelector(".signin");

emailUser.addEventListener("click", toggleMenu);

function toggleMenu() {
    /* smallMenu.setAttribute("style", "display: block"); */
    smallMenu.classList.toggle("inactive");
}

