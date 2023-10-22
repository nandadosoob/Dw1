function preenchido() {
    let email = document.getElementById("input_email").value;
    let senha = document.getElementById("input_senha").value;
    let erro = document.getElementById("erro").value

    if (email.length < 1 && senha.length < 1) {
        erro = "Todos os campos devem ser preenchidos"
    }
    else{
        erro = "";
    }

}