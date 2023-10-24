//let erro_senha = document.getElementById("erro_senha").value
//let erro_campo = document.getElementById("erro_campo").value

function validar() { 
    let nome = document.getElementById("input_nome").value
    let email = document.getElementById("input_email").value
    let senha = document.getElementById("input_senha").value
    
    if (nome === "" || email === "" || senha === "") { 
        alert("Todos os campos precisam ser preenchidos");
    }

    else if (senha.length < 8) {
        alert("Sua senha deve conter no mínimo 8 caracteres");
    }

    else {
        alert("Cadastro realizado");
    }
}

