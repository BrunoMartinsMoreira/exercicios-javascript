/*arrays, funções e objetos*/
function getData(){
   const form = document.querySelector('.form');
   const resultado = document.querySelector('#resultado');

   const pessoas = [];

   function recebeEventoForm(evento){
      evento.preventDefault();

      const nome = form.querySelector('#nome');
      const sobrenome = form.querySelector('#sobrenome');
      const peso = form.querySelector('#peso');
      const altura = form.querySelector('#altura');
      const imc = Number(peso.value / (altura.value ** 2)).toFixed(2);
      
      pessoas.push({
         nome: nome.value,
         sobrenome: sobrenome.value,
         peso: peso.value,
         altura: altura.value,
         imc: imc.value
      });
      
      resultado.innerHTML += `<p> O seu imc é de ${imc}</p>`
      
   }
   form.addEventListener('submit', recebeEventoForm);
}
getData();