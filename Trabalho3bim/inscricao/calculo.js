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
        document.getElementById("input_nome").value = "";
        document.getElementById("input_email").value = "";
        document.getElementById("input_senha").value = "";
    }
}

