//dom

const lampada = document.querySelector("#lampada")
const on = document.querySelector("#ligar")
const off = document.querySelector("#desligar")

//evento

on.addEventListener("click", ligarLuz)
off.addEventListener("click", apagarLuz)

// funcao

function ligarLuz() {
    lampada.src = "images/acesa.gif"
}

function apagarLuz() {
    lampada.src = "images/apagada.gif"
}