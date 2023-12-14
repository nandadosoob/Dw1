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

function alternarModo() {
    let container = document.querySelector(".container");

    // Verificar se tá no modo claro
    if (container.classList.contains("modo-claro")) {
        // Aqui vai mudar pro modo escuro
        container.classList.remove("modo-claro");
        container.classList.add("modo-escuro");
        sun.src = "./light_dark_mode/sun-solid.svg";
    } else {
        // Aqui é pra mudar pro modo claro
        sun.src = "./light_dark_mode/moon-solid.svg";
        container.classList.remove("modo-escuro");
        container.classList.add("modo-claro");
    }
}
