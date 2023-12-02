let menuMobile = document.querySelector(".menu-mobile")
let menuIcon = document.querySelector("#imgMenu")

function puxar(){
    if (menuMobile.style.right === '100%'){
        menuMobile.style.right = '0%'
        menuIcon.src = "./imagens/xmark-solid.svg"
    }
    
    else{
        menuMobile.style.right = '100%'
        menuIcon.src = "./imagens/bars-solid.svg"
    }
}