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

    horas.innerHTML = hr
    minutos.innerHTML = min
    segundos.innerHTML = seg

    if(seg < 10) {
        segundos.innerHTML = '0' + seg
    }

    if(min < 10) {
        segundos.innerHTML = '0' + seg
    }

    if(hr < 10) {
        segundos.innerHTML = '0' + seg
    }
}