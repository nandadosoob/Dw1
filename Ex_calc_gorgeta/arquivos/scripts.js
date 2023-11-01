function calculo_gorjeta() {
    let val_conta = document.getElementById("valorConta").value;
    let porcentagem = document.getElementById("qualidadeServico").value;
    
    if (val_conta === "" || porcentagem === "") {
        alert("Todos os campos devem ser preenchidos");
    }else{
        let resultado_gorjeta = document.getElementsById("tipoConta");
        let resultado_total = document.getElementsById("valorTotal");

        resultado_gorjeta.innerHTML =  (porcentagem * val_conta)
        resultado_total.innerHTML = (val_conta + resultado_gorjeta)
    }

}