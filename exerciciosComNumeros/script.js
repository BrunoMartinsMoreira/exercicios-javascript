const numero = Number(prompt('Digite um numero:'))
const number = document.querySelector('#number')
const texto = document.querySelector('#texto')
number.innerHTML = numero;

texto.innerHTML = `
<p>Raiz quadrada : ${Math.sqrt(numero)}</p>
<p>${numero} é inteiro ? ${Number.isInteger(numero)}</p>
<p>É NaN ${Number.isNaN(numero)}</p>
<p>${Math.ceil(numero)}</p>
<p>${Math.floor(numero)}</p>
<p>${numero.toFixed(2)}</p>

`

