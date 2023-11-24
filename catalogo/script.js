// Variável para armazenar a senha cadastrada durante o cadastro
var senhaCadastrada;

document.getElementById("cadastroForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    senhaCadastrada = document.getElementById("senha").value;

    if (nome && email && telefone && senhaCadastrada) {
        alert("Cadastrado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos do formulário de cadastro.");
    }
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var emailLogin = document.getElementById("email_login").value;
    var senhaLogin = document.getElementById("senha_login").value;

    if (senhaLogin === senhaCadastrada) {
        // Senha correta - redireciona para a página index.html
        alert("Login bem-sucedido!");
        window.location.href = "index.html";
    } else {
        // Senha incorreta - exibe aviso
        alert("Senha incorreta. Por favor, tente novamente.");
    }
});
