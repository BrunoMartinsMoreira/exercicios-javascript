const pessoas = [
   { nome: 'Bruno', idade: 27 },
   { nome: 'leonardo', idade: 57 },
   { nome: 'benedita', idade: 49 },
   { nome: 'alice', idade: 17 },
   { nome: 'leopoldo', idade: 67 },
   { nome: 'astrogildo', idade: 89 },
   { nome: 'helen', idade: 25 },
   { nome: 'veronica', idade: 42 },
   { nome: 'jose', idade: 57 },
   { nome: 'hugo', idade: 18 },
   { nome: 'nicole', idade: 03 },
]

//pessoas com 5 ou mais letras no nome
const bigName = pessoas.filter(obj => obj.nome.length >= 5);

//pessoas com mais de 50 anos
const oldPersons = pessoas.filter(obj => obj.idade > 50);
//nome termina com a
const nameA = pessoas.filter(obj => {
   return obj.nome.toLowerCase.endsWith('a')
})