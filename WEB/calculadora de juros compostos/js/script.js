document.querySelector('#calculate').addEventListener('click', function() {
    const value = document.querySelector('#value').value
    const fees = (document.querySelector('#fees').value) / 100
    const time = document.querySelector('#time').value

    const total = value * (1 + fees) ** time

    document.querySelector('#result').innerHTML = ("R$ " + total.toFixed(2).replace('.',','))
})