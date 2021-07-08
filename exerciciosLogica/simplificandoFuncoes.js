/*
 * maneiras diferentes de fazer a mesma coisa usando funções

pegar dois numeros e retornar o maior
 */

function max(x, y) {
   if (x > y) {
      return x;
   } else {
      return y;
   }
}
console.log(max(10, 20));

//simplificando, retirando o else pois o codigo so vai cair no segundo retorno caso a primeira
//opçao seja falsa
function max(x, y) {
   if (x > y) {
      return x;
   }
   return y;
}

// quando a linha é pequena e a verificação e simples pode-se eliminar as chaves do if
function max(x, y) {
   if (x > y) return x;
   return y;
}

//usando operador ternario
function max(x, y) {
   return x > y ? x : y;
}

//usando arrow function e ternario
const bigger = (x, y) => {
   return x > y ? x : y;
}

//quando a arrow function tem apenas uma linha, pode-se eliminar as chaves e o return
// pois o que vem depois do => retorna implicitamente
const bigger = (a, b) => x > y ? x : y;


// sempre tem maneiras mais simples de se fazer a mesma coisa XD