// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
   this.nome = nome;
   this.sobrenome = sobrenome;
   this.idade = idade;
}
Pessoa.prototype.nomeCompleto = function () {
   return `${this.nome} ${this.sobrenome}`
}

const Bruno = new Pessoa('Bruno', 'Moreira', 27);
console.log(Bruno)