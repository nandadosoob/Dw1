function validar() {
    let titulo = document.querySelector("#titulo").value
    let cod_filme = document.querySelector("#cod_filme").value
    let sinopse = document.querySelector("#sinopse").value
    let datalanc = document.querySelector("#datalanc").value
    let classificacao = document.querySelector("#classificacao").value
    let duracao = document.querySelector("#duracao").value
    
    if (titulo ===""  || cod_filme === "" || sinopse === "" || datalanc === "" || classificacao ===""  || duracao ==="") {
        alert("Todos os campos devem ser preenchidos");
    }

    else{
        alert("Cadastro realizado");
        document.getElementById("titulo").value = "";
        document.getElementById("cod_filme").value = "";
        document.getElementById("sinopse").value = "";
        document.getElementById("datalanc").value = "";
        document.getElementById("classificacao").value = "";
        document.getElementById("duracao").value = "";

    }
}