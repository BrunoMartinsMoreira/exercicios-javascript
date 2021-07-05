function calculoImc() {
   const form = document.querySelector('form');

   form.addEventListener('submit', function (event) {
      event.preventDefault();
      const inputPeso = form.querySelector('#peso');
      const inputAltura = form.querySelector('#altura');

      const peso = Number(inputPeso.value);
      const altura = Number(inputAltura.value);

      if (!peso) {
         setResultado('Peso inválido', false)
         return;
      }

      if (!altura) {
         setResultado('Altura inválida', false)
         return;
      }

      const imc = getImc(peso, altura);
      const nivelImc = getNivelImc(imc);
      const msg = `O seu imc é ${imc}, ${nivelImc}`;

      setResultado(msg, true);
   });

   function getNivelImc(imc) {
      const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
         'Obesidade nivel 1', 'Obesidade nivel 2', 'Obesidade nivel 3'
      ];
      if (imc < 18.5) {
         return nivel[0];
      }
      if (imc >= 18.5 && imc < 24.9) {
         return nivel[1];
      }
      if (imc >= 24.9 && imc < 29.9) {
         return nivel[2];
      }
      if (imc >= 29.9 && imc < 34.9) {
         return nivel[3];
      }
      if (imc >= 34.9 && imc < 39.9) {
         return nivel[4];
      }
      if (imc >= 39.9) {
         return nivel[5];
      }
   };

   function getImc(peso, altura) {
      const imc = peso / (altura ** 2)
      return imc.toFixed(2);
   };

   function criaP() {
      const p = document.createElement('p')
      return p;
   };

   function setResultado(msg, isValid) {
      const resultado = document.querySelector('.resultado');
      resultado.innerHTML = "";
      const p = criaP();

      if (isValid) {
         p.classList.add('resultadoP');
      } else {
         p.classList.add('erro')
      };

      p.innerHTML = msg;
      resultado.appendChild(p);
   }


}
calculoImc();