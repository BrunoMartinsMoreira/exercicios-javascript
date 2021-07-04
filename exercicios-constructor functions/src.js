// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
   nome: 'Nome pessoa',
   idade: 0,
   andar() {
      console.log(this.nome + ' andou');
   }
}

function Pessoa(nome, idade) {
   this.nome = nome;
   this.idade = idade;
   this.andar = function () {
      console.log(`${this.nome} andou`)
   };
}
// Crie 3 pessoas, João - 20 anos, Maria - 25 anos, Bruno - 15 anos
const Joao = new Pessoa('Joao', 20);
const Maria = new Pessoa('Maria', 25);
const Bruno = new Pessoa('Bruno', 15)


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(selector) {

   const elementList = document.querySelectorAll(selector);
   this.elements = elementList;
   console.log(this.elements)

   this.addClass = function (classToAdd) {
      elementList.forEach((element) => {
         element.classList.add(classToAdd);
      })
   }

   this.removeClass = function (classToRemove) {
      elementList.forEach((element) => {
         element.classList.remove(classToRemove);
      })
   }
}

const itensList = new Dom('li');
itensList.addClass('active')