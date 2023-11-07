function calculo_gorjeta() {
    const val_conta = parseFloat(document.getElementById("valorConta").value);
    const porcentagem = parseFloat(document.getElementById("qualidadeServico").value);
    
    if (isNaN(val_conta)) {
        alert("Todos os campos devem ser preenchidos");
    }else{
        const resultado_gorjeta = (porcentagem * val_conta);
        const resultado_total = (val_conta + resultado_gorjeta);
        
        document.getElementById("tipoConta").value = "R$ " + resultado_gorjeta;
        document.getElementById("valorTotal").value = "R$ " + resultado_total;
    }

}