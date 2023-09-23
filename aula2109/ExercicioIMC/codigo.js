let altura = document.getElementById("input_altura").value
let peso = document.getElementById("input_peso").value
let nome = document.getElementById("input_nome").value

function calculaIMC(){
    let IMC = input_peso.value / (input_altura.value * input_altura.value)
    
    if (IMC < 18.5) {
        classificacao = "Magreza"
    }

    else if (IMC>=18.5 && IMC<=24.9) {
        classificacao = "Normal"
    }
    
    else if (IMC>=25 && IMC<=29.9) {
        classificacao = "Sobrepes"
    }
    
    else if (IMC>=30 && IMC<=34.9) {
        classificacao = "Obesidade grau 1"
    }
    
    else if (IMC>=35 && IMC<=39.9) {
        classificacao = "Obesidade grau 2"
    }
    
    else if (IMC>40) {
        classificacao = "Obesidade grau 3"
    }
    
    let divResultado = document.getElementById("resultado")
    divResultado.innerHTML = (input_nome.value + " Seu IMC é de" + IMC + " e você está com " + classificacao)
    
}