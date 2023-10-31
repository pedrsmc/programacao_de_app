const userInput = document.querySelector("#userInput")
const passInput = document.querySelector("#passInput")
const warning = document.querySelector("#warning")
const button = document.querySelector("#button")

function login() {
    let login = userInput.value
    let senha = passInput.value

    if (login == "" || senha == "") {
        warning.textContent = "Digite o login e a senha."
    } else {
        warning.textContent = ""

        let usuarioCadastrado = JSON.parse(localStorage.getItem("usuario"));

        if (!usuarioCadastrado) {
            warning.textContent = "O usuário não existe."
        } else {
            if (usuarioCadastrado.login == login && usuarioCadastrado.senha == senha) {
                localStorage.clear()
                window.location.href = "https://www.youtube.com"
            } else {
                warning.textContent = "Usuário ou senha incorretos."
            }
        }

    }
}
