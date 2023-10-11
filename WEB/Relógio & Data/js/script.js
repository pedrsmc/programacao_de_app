// dom

const horas = document.querySelector("#horas")
const minutos = document.querySelector("#minutos")
const segundos = document.querySelector("#segundos")
const dia = document.querySelector("#dia")
const mes = document.querySelector("#mes")
const ano = document.querySelector("#ano")
const saudacao = document.querySelector('#saudacao')

//evento

const relogio = setInterval(tempo)

// funcao

function tempo() {
    let newDate = new Date()
    
    let hr = newDate.getHours()
    let min = newDate.getMinutes()
    let seg = newDate.getSeconds()
    let day = newDate.getDate()
    let month = newDate.getMonth() + 1
    let year = newDate.getFullYear()

    if(seg < 10) {
        seg = '0' + seg
    } if(min < 10) {
        min = '0' + min
    } if(hr < 10) {
        hr = '0' + hr
    }

    if(hr > 4) {
        saudacao.innerHTML = 'Bom dia!'
    } if(hr > 12) {
        saudacao.innerHTML = 'Boa tarde!'
    } if(hr >= 18) {
        saudacao.innerHTML = 'Boa noite!'
    }
    
    horas.innerHTML = hr
    minutos.innerHTML = min
    segundos.innerHTML = seg

    dia.innerHTML = day

    if(month < 10) {
        month = '0' + month
    }

    mes.innerHTML = month
    ano.innerHTML = year
}