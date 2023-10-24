let nome = document.getElementById("input_nome").value
let email = document.getElementById("input_email").value
let senha = document.getElementById("input_senha").value
//let erro_senha = document.getElementById("erro_senha").value
//let erro_campo = document.getElementById("erro_campo").value

function validar() { // TIRAR DUVIDA COM O PROFESSOR SOBRE PQ N DA CERTO SENDO SÓ "nome"
    if (input_nome == "" && input_email == "" && input_senha == "") { 
        alert("Todos os campos precisam ser preenchidos");
    }

    else if (input_senha.length < 8) {
        alert("Sua senha deve conter no mínimo 8 caracteres");
    }

    else {
        alert("Cadastro realizado");
    }
    //if (senha.lenght < 8) {
      //  alert("Sua senha deve conter no mínimo 8 caracteres");
    //}



}


//function qnt_senha() {
//    if (senha.length < 8 ) {
//        erro_senha.textContent = "A senha precisa ter no mínimo 8 caracteres"
//    }

//    else {
//        erro_senha = "";
//    }}

//function campos_preenchidos() { 
//    if (nome.length < 1 && email.length <1 && senha.length < 1){
//        erro_campo = "Todos os campos devem ser preenchidos"
//    }
//    else {
//        erro_campo = "";
//    }
//}

