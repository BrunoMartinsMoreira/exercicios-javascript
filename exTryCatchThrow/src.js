function retornaHora(data) {
   if (data && !(data instanceof Date)) { // se data nao for um new Date()
      throw new Error('Esperando instancia de Date.') //dispara um erro caso ocorra
   };
   if (!data) {
      data = new Date();
   };
   return data.toLocaleTimeString('pt-Br', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
   });
}
try { // tenta executar o programa e caso ocorra algum erro
   const hora = retornaHora();
   console.log(hora)
} catch { //captura e trata o erro
   console.log('ocorreu um erro')
} finally { //sempre será executado
   console.log('Tenha um bom dia!')
}