const key = 'e355cb35c84a8d8d1ebea310e3e0aca9'
const town = document.querySelector('#town')
const celsius = document.querySelector('#celsius')
const desc = document.querySelector('#desc')
const input = document.querySelector('#input')
const button = document.querySelector('#button')
const bottomBox = document.querySelector('.bottom-box')

button.addEventListener('click', searchCity)

function showBottomBox() {
    bottomBox.style.display = "flex";
}

async function searchCity() {
    let cityName = input.value

    if (cityName == "") {
        alert("Digite o nome de uma cidade!")
    } else {
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric&lang=pt_br`)
            .then(awnser => awnser.json())

        town.textContent = data.name
        celsius.textContent = Math.ceil(data.main.temp) + " °C"
        desc.textContent = data.weather[0].description

        showBottomBox()
        console.log(data)
    }
}