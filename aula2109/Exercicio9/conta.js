let largura = document.getElementById("input_largura").value
let profundidade = document.getElementById("input_profundidade").value
let valor_metro = document.getElementById("input_metro").value

function calcula() {
    let tamanho_terreno = input_largura.value * input_profundidade.value
    window.alert("Tamanho do terreno: " + tamanho_terreno)

    let preco_terreno = input_metro.value * tamanho_terreno
    window.alert("Preço do terreno: " + preco_terreno)

  }