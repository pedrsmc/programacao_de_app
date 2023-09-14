// dom

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

    if(seg < 10) {
        seg = '0' + seg
    }

    if(min < 10) {
        min = '0' + min
    }

    if(hr < 10) {
        hr = '0' + hr
    }

    horas.innerHTML = hr
    minutos.innerHTML = min
    segundos.innerHTML = seg
}