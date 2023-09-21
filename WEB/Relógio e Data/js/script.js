// dom

const saudacao = document.querySelector('#saudacao')
const dia = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const anos = document.querySelector('#anos')
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')


// evento

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

    if(hr < 10) {
        hr = '0' + hr
    } if(min < 10) {
        min = '0' + min
    } if(seg < 10) {
        seg = '0' + seg
    }

    horas.innerHTML = hr

    if(hr >= 5) {
        saudacao.innerHTML = "BOM DIA!"
    } if(hr > 12) {
        saudacao.innerHTML = "BOA TARDE!"
    } if(hr >= 18) {
        saudacao.innerHTML = "BOA NOITE!"
    }

    minutos.innerHTML = min
    segundos.innerHTML = seg
    
    if(month < 10) {
        month = '0' + month
    } if(day < 10) {
        day = '0' + day
    }

    dia.innerHTML = day
    mes.innerHTML = month
    anos.innerHTML = year
}