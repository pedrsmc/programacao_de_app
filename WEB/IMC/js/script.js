// dom

const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const butao = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')
const situacao = document.querySelector("#situacao")

// event

butao.addEventListener('click',imc)

// funcao

function imc() {
    let weight = Number(peso.value)
    let height = Number(altura.value)
    let imcResultado = weight / (height*height)

    resultado.textContent = imcResultado.toFixed(3)
}