const cadLogin = document.querySelector("#cadLogin")
const cadSenha = document.querySelector("#cadSenha")
const confSenha = document.querySelector("#confSenha")
const warning = document.querySelector("#warning")

function cadastrar() {
    let login = cadLogin.value
    let senhaDigitada = cadSenha.value
    let senhaConf = confSenha.value

    if (login == "" || senhaDigitada == "" || senhaConf == "") {
        warning.textContent = "Preencha todos os formulários, por favor."
    } else {
        if (senhaDigitada == senhaConf) {
            warning.textContent = ""

            let novoUsuario = {
                login: login,
                senha: senhaDigitada
            };

            localStorage.setItem("usuario", JSON.stringify(novoUsuario))
                
            alert("Cadastro realizado!")
            
            cadLogin.value = ""
            cadSenha.value = ""
            confSenha.value = ""
        } else {
            warning.textContent = "As senhas não coincidem."
        }
    }
}