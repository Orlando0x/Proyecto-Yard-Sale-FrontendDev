const smallMenu = document.querySelector(".container");
const emailUser = document.querySelector(".signin");
const menuMobile = document.querySelector(".menu-img")
const menuList = document.querySelector(".container-menuMobile")
const cart = document.querySelector(".cart");
const shoppCart = document.querySelector("aside");
const cardsContainer = document.querySelector(".cards-container");
const containerDesciption = document.querySelector(".container-description");
const closeDescriptionIcon = document.querySelector(".close");
const CloseArrow = document.querySelector("#closeArrow");


cart.addEventListener("click", toggleCart);
emailUser.addEventListener("click", toggleMenu);
menuMobile.addEventListener("click", toggleMenuMobile);
closeDescriptionIcon.addEventListener("click", closeDescription)
CloseArrow.addEventListener("click", closeShoppingCart)


function toggleCart() {

    shoppCart.classList.toggle("inactive3");
    menuList.classList.remove("inactive2");
    smallMenu.classList.remove("inactive");
    containerDesciption.classList.add("inactive3")
}

function toggleMenuMobile() {
    menuList.classList.toggle("inactive2");
    shoppCart.classList.add("inactive3");
    containerDesciption.classList.add("inactive3")

}

function toggleMenu() {
    /* smallMenu.setAttribute("style", "display: block");  otra forma */
    smallMenu.classList.toggle("inactive");
    shoppCart.classList.add("inactive3");
    containerDesciption.classList.add("inactive3")
}
function openDescription(){
    console.log("vamos bien");
    containerDesciption.classList.remove("inactive3")
    shoppCart.classList.add("inactive3");
    smallMenu.classList.remove("inactive");
    menuList.classList.remove("inactive2");
}
function closeDescription(){
    containerDesciption.classList.add("inactive3")

}
function closeShoppingCart() {
    shoppCart.classList.add("inactive3");

}


const productList = [];


productList.push({
    name: `Bike 20"`,
    price: 120,
    image: "./bike.jpg" 
})
productList.push({
    name: `Bike 26"`,
    price: 160,
    image: "./bike.jpg" 
})
productList.push({
    name: `Bike 29"`,
    price: 200,
    image: "./bike.jpg" 
})
productList.push ({
    name:'Bicycle seat bag',
    price: 20,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 
productList.push({
    name: `Bike 16"`,
    price: 80,
    image: "./bike.jpg"  
})
productList.push ({
    name:'Tennis Montain Bike',
    price: 60,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 40,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});


for(product of productList){
    const productCard = document.createElement("div")
    productCard.classList.add("product-card")

    const imgProduct = document.createElement("img");
    imgProduct.setAttribute("src", product.image);
    imgProduct.addEventListener("click", openDescription);
    
    const productCardDown = document.createElement("div")
    productCardDown.classList.add("product-card_down")
    
    const productCardDiv = document.createElement("div")

    
    const productPrice = document.createElement("p");
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    const cartIconFigure = document.createElement("figure");
    cartIconFigure.classList.add("icon");
    const cartIconImg = document.createElement("img");
    cartIconImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    cartIconFigure.appendChild(cartIconImg);

    productCardDiv.append(productPrice, productName);

    productCardDown.appendChild(productCardDiv);
    productCardDown.appendChild(cartIconFigure);

    productCard.appendChild(imgProduct);
    productCard.appendChild(productCardDown);

    cardsContainer.appendChild(productCard);
}
