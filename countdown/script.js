import countDown from "./countdown.js";

const daysContainer = document.querySelector('.days');
const hoursContainer = document.querySelector('.hours');
const minContainer = document.querySelector('.minutes');
const secContainer = document.querySelector('.seconds');

const tempoParaONatal = new countDown("24 december 2021 23:59:59 GMT-0300");

setInterval(() => {
   daysContainer.innerText = tempoParaONatal.total.days < 10 ?
      `0${tempoParaONatal.total.days} Dia` :
      `${tempoParaONatal.total.days} Dias`;

   hoursContainer.innerText = tempoParaONatal.total.hours < 10 ?
      `0${tempoParaONatal.total.hours} Hora` :
      `${tempoParaONatal.total.hours} Horas`;

   minContainer.innerText = tempoParaONatal.total.minutes < 10 ?
      `0${tempoParaONatal.total.minutes} Minuto` :
      `${tempoParaONatal.total.minutes} Minutos`;

   secContainer.innerText = tempoParaONatal.total.seconds < 10 ?
      `0${tempoParaONatal.total.seconds} Segundo` :
      `${tempoParaONatal.total.seconds} Segundos`;
}, 1000)

/*console.log(
   `Faltam ${tempoParaONatal.total.days} dias, ${tempoParaONatal.total.hours} horas, ${tempoParaONatal.total.minutes} minutos e ${tempoParaONatal.total.seconds} segundos para o natal`
);*/