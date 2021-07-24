// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const p = document.querySelectorAll('p');
const total = Array.prototype.reduce.call(p, (acc, item) => {
   return acc + item.innerText.length;
}, 0);
console.log(total)



// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function creatElement(tag, className, innerContent) {
   const el = document.createElement(tag);
   className ? el.classList.add(className) : null;
   innerContent ? el.innerHTML = innerContent : null;
   return el;
}
console.log(creatElement('p', 'active', 'this is a content'))



// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const title = creatElement.bind(null, 'h1', 'titulo');
const phrase1 = title('não há nada mais sublime do que aprender!');
const phrase2 = title('a maior aspiração da alma é pelo saber!')
console.log(phrase1);
console.log(phrase2);