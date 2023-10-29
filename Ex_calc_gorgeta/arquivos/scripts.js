function calculo_gorjeta() {
    let val_conta = document.getElementById("valorConta").value;
    let porcentagem = document.getElementById("qualidadeServico").value;
    let resultado_gorjeta = document.getElementsByClassName("resultado");
    let resultado_total = document.getElementsByClassName("valorTotal");

    if (val_conta === "" || porcentagem === "") {
        alert("Todos os campos devem ser preenchidos");
    }else{
        resultado_gorjeta.innerHTML =  (porcentagem * val_conta);
        resultado_total.innerHTML = (val_conta + resultado_gorjeta);
    }

}