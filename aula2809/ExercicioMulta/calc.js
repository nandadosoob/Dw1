let vel_max = document.getElementById("input_vel_max").value
let vel_veiculo = document.getElementById("input_vel_veiculo").value

function calculaVelocidade() {
    let porcentagem = (input_vel_max.value / input_vel_veiculo.value) * 100

    if (porcentagem <= 20 ) {
        multa = "R$ 130,16"
    }

    else if (porcentagem > 20 && porcentagem <= 50) {
        multa = "R$ 195,23"
    }

    else if (porcentagem > 50) {
        multa = "R$ 880,41"
    }

    let divResultado = document.getElementById("resultado")
    divResultado.innerHTML = ("Você excedeu " + porcentagem + " a velocidade máxima. Sua multa é de " + multa)
}