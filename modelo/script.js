function calculoImc() {
   const form = document.querySelector('form');
   const resultado = document.querySelector('.resultado');

   function recebeDadosDoForm(evento) {
      evento.preventDefault();

      const altura = form.querySelector('#altura');
      const peso = form.querySelector('#peso');

      const imc = Number(peso.value / (altura.value ** 2)).toFixed(2);

      let diagnostico = ``;

      if (imc < 18.5) {
         diagnostico = `IMC: ${imc}, você está abaixo do abaixo do peso.`
      } else if (imc >= 18.5 && imc <= 24.99) {
         diagnostico = `IMC: ${imc}, seu peso está normal.`
      } else if (imc >= 25 && imc <= 29.99) {
         diagnostico = `IMC: ${imc}, você está com sobrepeso.`
      } else if (imc >= 30 && imc <= 34.99) {
         diagnostico = `IMC: ${imc}, você está com obesidade grau 1.`
      } else if (imc >= 35 && imc <= 39.99) {
         diagnostico = `IMC: ${imc}, você está com obesidade grau 2.`
      } else if (imc > 40) {
         diagnostico = `IMC: ${imc}, você está com obesidade grau 3.`
      }

      resultado.innerHTML += `<p>${diagnostico}</p>`
   }
   form.addEventListener('submit', recebeDadosDoForm);

}
calculoImc();