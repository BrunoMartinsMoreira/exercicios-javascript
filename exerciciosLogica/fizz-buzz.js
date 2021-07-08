/**
 * escrever uma funcao que receba um numero e retorne:
 * se o numero for divisivel por 3 = fizz
 * se o numero for divisivel por 5 = buzz
 * se o numero for divisivel por 3 e 5 = FizzBuzz
 * se o numero nao for divisivel por 3 nem 5 = retornar o proprio numero
 * chegar se realmente é um numero;
 * numeros entre 0 e 100
 */


function fizzBuzz(num) {
   if (typeof num !== 'number') return num;
   if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
   if (num % 3 === 0) return 'fizz';
   if (num % 5 === 0) return 'buzz';
   return num;
}

for (let i = 0; i <= 100; i++) {
   console.log(i, fizzBuzz(i))
}