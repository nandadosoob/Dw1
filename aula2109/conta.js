let largura = document.getElementById("input_largura").value
let profundidade = document.getElementById("input_profundidade").value
let valor_metro = document.getElementById("input_metro").value

function calculaArea() {
    
    let tamanho_terreno = largura * profundidade
    
    //divResultado.innerHTML = "<h2>Largura: " + inputLargura.value + "</h2>"

    return tamanho_terreno
    window.alert("Tamanho do terreno: " + tamanho_terreno)
    console.log("Tamanho do terreno:" + tamanho_terreno)

    // divResultado.innerText = "Largura: " + inputLargura.value
    //divResultado.innerHTML = "<h2>Largura: " + inputLargura.value + "</h2>"
    
    
  }
  
  function calculaPreco() {
    let preco_terreno = valor_metro * tamanho_terreno
    return preco_terreno
    //window.alert("Preço do terreno: " + preco_terreno)
    console.log("Preço do terreno: " + preco_terreno)
    
}