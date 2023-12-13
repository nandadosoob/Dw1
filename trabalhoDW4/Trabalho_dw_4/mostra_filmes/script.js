let mobile = document.querySelector("#menu-mobile")
let icone = document.querySelector("#img-icone")

function menu(){
    if (mobile.style.right === '100%'){
        mobile.style.right = '0%'
        icone.src = "./icones/xmark-solid.svg"
    }

    else{
        mobile.style.right = '100%'
        icone.src = "./icones/bars-solid.svg"
    }
}