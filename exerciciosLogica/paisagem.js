/**
 * criar uma função que receba altura e largura como parametros e retornar true se 
 * a imagem estiver em modo paisagem
 */


const paisagem = (larg, alt) => larg > alt ? true : false;

//como sempre vai retornar true ou false pode-se eliminar o ternario
const paisagem = (larg, alt) => larg > alt;
console.log(paisagem(20, 10));
console.log(paisagem(20, 30));
console.log(paisagem(20, 20));