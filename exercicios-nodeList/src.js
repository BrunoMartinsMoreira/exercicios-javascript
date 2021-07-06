const div = document.querySelector('.paragraphs');
const paragraphs = div.querySelectorAll('p');

//pegar estilos do body
const bodyStyles = getComputedStyle(document.body);
const bgColorBody = bodyStyles.backgroundColor;
console.log(bgColorBody)

for (let p of paragraphs) {
   p.style.backgroundColor = bgColorBody
   p.style.color = 'white'
}