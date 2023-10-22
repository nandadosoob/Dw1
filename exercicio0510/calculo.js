
function ex01() {
    let num = document.getElementById("input_numero").value;
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = ""; // Limpa o conteúdo anterior

    for (let i = 1; i <= 10; i++) {
        let resul = num * i;
        resultado.innerHTML += `${num}x${i} = ${resul}<br>`;
        }
}



function ex02() {
    let num = document.getElementById("input_numero").value;
    let inicio = document.getElementsById("input_comeco").value;
    let fim = document.getElementById("input_final").value;
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    for (let i = inicio; i <= fim; i++) {
        let resul = num * i;
        resultado.innerHTML += `${num}x${i} = ${resul}<br>`;
    }

    /*if (inicio <= fim) {
        for (let i = inicio; i <= fim; i++) {
            let resul = num * i;
            resultado.innerHTML += `${num}x${i} = ${resul}<br>`;
            }
    } else {
        resultado.innerHTML = "O início deve ser menor ou igual ao fim.";
    }*/

}



function ex03() {
    let num = (document.getElementById("input_numero").value);
        let resultado = document.getElementById("resultado");

        resultado.innerHTML = ""; // Limpa o conteúdo anterior

        let fib = [1, 1];

        for (let i = 2; i < num; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }

        resultado.innerHTML = "Sequência de Fibonacci: " + fib.join(", ");
        }




function ex04() {
    let preco = document.getElementById("input_numero").value;
    let resultado = document.getElementById("resultado");
    
}



function ex05() {
    let numero = document.getElementById("input_numero").value;
    let resultado = document.getElementById("resultado");

    

}



function ex06() {
    let numero = document.getElementById("input_numero").value;
    resultado.innerHTML = Math.floor(Math.random() * (numero - 1 + 1)) + 1;
}




function ex07() {
    let capital = document.getElementById("input_capital").value;
    let taxa = document.getElementById("input_taxa").value;
    let periodo = document.getElementById("input_periodo").value;
    let resultado = document.getElementById("resultado");
    
    let montante = capital * Math.pow(1 + taxa, periodo);
    resultado.innerHTML = `O montante final é: ${montante.toFixed(2)}`;

}