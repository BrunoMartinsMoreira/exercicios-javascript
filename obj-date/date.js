// objeto nativo do js para trabalhar com datas
// meses comecam com 0 e vao ate 11

const data = new Date('2021-07-05 13:37:00') //formato mais encontrado
console.log('Dia do mes', data.getDate())
console.log('mes', data.getMonth()) // comeca do zero
console.log('ano', data.getFullYear())
console.log('hora', data.getHours())
console.log('min', data.getMinutes())
console.log('seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia semana', data.getDay()) //0 = domingo, 6 = sabado


//exemplo de funcao para formatar datas para o sistema br
function formatValue(num) {
   return num >= 10 ? num : `0${num}`;
}

function formatDate(date) {
   const day = formatValue(date.getDate());
   const month = formatValue(date.getMonth()); //+1 pq mes comeca em 0
   const year = formatValue(date.getFullYear());
   const hour = formatValue(date.getHours());
   const minutes = formatValue(date.getMinutes());
   const seconds = formatValue(date.getSeconds());

   return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`
}
const date = new Date();
const brazilDate = formatDate(date);
console.log(brazilDate)