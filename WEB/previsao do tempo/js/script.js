const key = 'e355cb35c84a8d8d1ebea310e3e0aca9'
const pesquisa = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')

botao.addEventListener('click', buscarCidade)

// async determina que a função aguarde uma resposta da API
async function buscarCidade() {
    let nomeCidade = pesquisa.value
    
    // await determina que o fetch aguarde uma resposta da API
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&appid=${key}&units=metric&lang=pt_br`)
    .then(resposta => resposta.json())

    cidade.textContent = "Tempo em " + dados.name
    temperatura.textContent = Math.ceil(dados.main.temp) + " °C"
    previsao.textContent = dados.weather[0].description

    console.log(dados)
}