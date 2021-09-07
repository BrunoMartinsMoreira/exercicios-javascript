
import geraSenha from './modules/geradores.js'

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');


const gera = () => {
   const senha = geraSenha(
      qtdCaracteres.value,
      chkMaiusculas.checked,
      chkMinusculas.checked,
      chkNumeros.checked,
      chkSimbolos.checked
   );
   return senha || 'Selecione pelo menos uma opção'
}
gerarSenha.addEventListener('click', () => {
   senhaGerada.innerHTML = gera();
})
