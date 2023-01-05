// https://api.twelvedata.com/price?symbol=AAPL&apikey=demo
let ld = document.querySelector('.live-data')
let metaPrice = document.querySelector('.meta-price')
let googlePrice = document.querySelector('.google-price')
let microsoftPrice = document.querySelector('.microsoft-price')
let adidasPrice = document.querySelector('.adidas-price')
let nikePrice = document.querySelector('.nike-price')
let teslaPrice = document.querySelector('.tesla-price')

// function refreshPrices (){
        
const getStockPrice = async (stock) => {

    const response = await fetch( ' https://api.twelvedata.com/price?symbol='+ stock +'&apikey=9039772849a1495c9b8562f22d9f459a')
    const data = await response.json()
    return data
}

getStockPrice('META').then(
    data => {

        let price = data.price
        metaPrice.textContent = price
      
    }
)
getStockPrice('GOOG').then(
    data => {

        let price = data.price
        googlePrice.textContent = price

      
    }
)
getStockPrice('MSFT').then(
    data => {
        let price = data.price
        microsoftPrice.textContent = price

      
    }
)
getStockPrice('ADS').then(
    data => {

        let price = data.price
        adidasPrice.textContent = price
 
    }
)
getStockPrice('NKE').then(
    data => {

        let price = data.price
        nikePrice.textContent = price   
    }
)
getStockPrice('TSLA').then(
    data => {

        let price = data.price
        teslaPrice.textContent = price      
    }
)
// }
// setInterval( refreshPrices, 60000)