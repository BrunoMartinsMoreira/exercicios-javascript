// Retorne um número aleatório
// entre 1050 e 2000

for (i = 0; i <= 10; i++) {
   const n = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
   console.log(n);
}



console.log('------------------------NÚMERO MÁXIMO-----------------------------')
//Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNum = numeros.split(', ')
const numMax = Math.max(...arrayNum);
console.log(numMax)


console.log('-----------------------LISTA DE PREÇOS SOMADOS---------------------------')

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
   'R$ 230  ', 'r$  200'
];

function formataPreco(preco) {
   preco = Number(preco.toUpperCase().replace('R$', '').trim().replace(',', '.'));
   preco = Number(preco.toFixed(2))
   return preco;
}

let soma = 0.
listaPrecos.forEach((preco) => {
   soma += formataPreco(preco);
})
console.log(soma.toLocaleString('pt-BR', {
   style: 'currency',
   currency: 'BRL',
}));