import GeraCPF from './modules/GeraCPF.js'
const cpfGerado = document.querySelector('.cpf-gerado');
const btn = document.querySelector('.btn');

function randomCpf() {
  const gera = new GeraCPF();
  cpfGerado.innerHTML = gera.geraNovoCpf();
};
randomCpf()
