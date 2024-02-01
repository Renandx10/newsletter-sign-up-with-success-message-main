function validarEmail() {
    var emailInput = document.getElementById("email")
    var resultado = document.getElementById("resultado")
    var sucesso = document.getElementById("sucesso")
    var conteudo = document.getElementById("conteudo")
    var email_validado = document.getElementById ("email_validado")
    
    
    var email = emailInput.value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        conteudo.style.display = "none"
        sucesso.style.display = "flex"

    } else {
        resultado.innerText = "E-mail invalido. Por favor,digite um e-mail válido";
        resultado.style.color = "red";
    }

    if (email === '') {
       resultado.innerText = "Por Favor, insira um e-mail";
    }
    
    email_validado.textContent = emailInput.value
}

function voltar() {
    var voltar = document.getElementById("voltar")
    
    if (voltar.onclick) {
        sucesso.style.display = "none"
        conteudo.style.display = "flex"
    }
}


