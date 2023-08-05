let CelciusInput = document.querySelector('#Celcius>input')
let FahrenheitInput = document.querySelector('#Fahrenheit>input')
let btn = document.querySelector('.button button')

function roundNumber(number) {
    return Math.round(number * 100) / 100
}
CelciusInput.addEventListener('input', function() {
    let cTemp = parseFloat(CelciusInput.value)
    let fTemp = (cTemp * (9 / 5)) + 32
    FahrenheitInput.value = roundNumber(fTemp)
})
FahrenheitInput.addEventListener('input', function() {
    let fTemp = parseFloat(FahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5 / 9)
    CelciusInput.value = roundNumber(cTemp)
})
btn.addEventListener('click', () => {
    CelciusInput.value = ""
    FahrenheitInput.value = ""
})