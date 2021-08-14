const btcPriceDisplay = document.querySelector('.btc')


function fetchBtc() {
   fetch('https://blockchain.info/ticker')
      .then(response => response.json())
      .then(btcPrice => {
         let BRLBTC = btcPrice.BRL.buy
         btcPriceDisplay.innerText = `R$ ${BRLBTC}`;
      })
}
const interval = 1000 * 60 * 60 * 4 // atualiza a cada 4h
setInterval(() => {
   fetchBtc
}, interval);
fetchBtc()