function login() {
    let email = document.getElementById("input_email").value
    let senha = document.getElementById("input_senha").value

    if (email == "" || senha == "") {
        alert("Todos os campos devem ser preenchidos");
    }else if (email != "admin@email.com.br") {
        alert("Email incorreto");
    } else if (senha != "#dw1UTFPR#") {
        alert("Senha incorreta");
    } else {
        alert("Usuario autenticado");
    }
}