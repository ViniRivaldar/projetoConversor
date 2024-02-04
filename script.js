const button = document.getElementById("Converter")
const select = document.getElementById("select-currency")


const euro = 5.36
const biticoin = 0.0000046

const convertValues = async() => {
    const inputReais = document.getElementById("input-converter").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(res => res.json())



    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const biticoin = data.BTCBRL.high



    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputReais);

    if(select.value === "€ Euro"){
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputReais/euro);
    }else if(select.value === "₿ Biticoin"){
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC',
        }).format(inputReais/biticoin); 
    }else {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputReais/dolar);
    }
}
const changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-image")
    if(select.value === "€ Euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.svg"
    }else if( select.value === "₿ Biticoin"){
        currencyName.innerHTML = "Biticoin"
        currencyImage.src = "./assets/biticoin.png"
    }else{
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.svg"
    }
    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)