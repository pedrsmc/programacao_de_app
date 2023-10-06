const distancia = document.querySelector("#distancia")
const rendimento = document.querySelector("#rendimento")
const preco = document.querySelector("#preco")
const resultado = document.querySelector("#resultado")
const botao = document.querySelector("#botao")

botao.addEventListener('click', valorGasto)

function valorGasto() {
    let d = Number(distancia.value)
    let r = Number(rendimento.value)
    let p = Number(preco.value)
    let valor

    valor = (d / r) * p

    resultado.textContent = "Valor gasto = " + valor.toFixed(2) + " R$"
}