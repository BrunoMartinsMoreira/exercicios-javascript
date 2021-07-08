// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [{
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
   },
   {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
   },
   {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
   },
   {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
   },
   {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
   },
];
let totalTaxas = 0;
let entradas = 0;
let balanco = 0;
transacoes.forEach((item) => {
   const numlimpo = item.valor.replace('R$ ', '');
   const valor = Number(numlimpo);

   if (item.descricao.slice(0, 4) === 'Taxa') {
      totalTaxas += valor;
   };

   if (item.descricao.includes('Recebimento')) {
      entradas += valor;
   }
   balanco = entradas - totalTaxas;
})
console.log(`Total de entradas: R$ ${entradas},00`)
console.log(`Total de taxas: R$ ${totalTaxas},00`)
console.log(`O balanço foi : R$ ${balanco},00`)




console.log('##################################################')




// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
console.log(transportes.split(';'))

console.log('##################################################')


// Substitua todos os span's por a's
const html = `<ul>
                 <li><span>Sobre</span></li>
                 <li><span>Produtos</span></li>
                 <li><span>Contato</span></li>
               </ul>`;
const novoHtml = html.split('span').join('a');
console.log(novoHtml);

console.log('##################################################')


// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length - 1]);

console.log('##################################################')

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let nTaxas = 0;
transacoes2.forEach((item) => {
   item = item.toLocaleLowerCase().trim().slice(0, 4);
   if (item === 'taxa') nTaxas++
});
console.log(nTaxas)