//dom

const imagem = document.querySelector("#imagem")
const cr7 = document.querySelector("#cr7")
const dybala = document.querySelector("#dybala")
const haaland = document.querySelector("#haaland")
const mbappe = document.querySelector("#mbappe")
const messi = document.querySelector("#messi")
const neymar = document.querySelector("#neymar")

//evento

cr7.addEventListener("click",fotoCr7)
dybala.addEventListener("click",fotoDybala)
haaland.addEventListener("click",fotoHaaland)
mbappe.addEventListener("click",fotoMbappe)
messi.addEventListener("click",fotoMessi)
neymar.addEventListener("click",fotoNeymar)

//funcao

function fotoCr7() {
    imagem.src = "images/cr7.jpg"
    document.getElementById("nome").innerHTML = "CRISTIANO RONALDO"
}

function fotoDybala() {
    imagem.src = "images/dybala.jpg"
    document.getElementById("nome").innerHTML = "DYBALA"
}

function fotoHaaland() {
    imagem.src = "images/haaland.png"
    document.getElementById("nome").innerHTML = "HAALAND"
}

function fotoCr7() {
    imagem.src = "images/cr7.jpg"
    document.getElementById("nome").innerHTML = "CRISTIANO RONALDO"
}

function fotoCr7() {
    imagem.src = "images/cr7.jpg"
    document.getElementById("nome").innerHTML = "CRISTIANO RONALDO"
}