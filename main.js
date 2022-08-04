const smallMenu = document.querySelector(".container");
const emailUser = document.querySelector(".signin");
const menuMobile = document.querySelector(".menu-img")
const menuList = document.querySelector(".container-menuMobile")
const cart = document.querySelector(".cart");
const shoppCart = document.querySelector("aside");

cart.addEventListener("click", toggleCart);
emailUser.addEventListener("click", toggleMenu);
menuMobile.addEventListener("click", toggleMenuMobile);


function toggleCart() {

    shoppCart.classList.toggle("inactive3");
    menuList.classList.remove("inactive2");
    smallMenu.classList.remove("inactive");

}


function toggleMenuMobile() {
    menuList.classList.toggle("inactive2");
    shoppCart.classList.add("inactive3");

}

function toggleMenu() {
    /* smallMenu.setAttribute("style", "display: block"); */
    smallMenu.classList.toggle("inactive");
    shoppCart.classList.add("inactive3");
}

