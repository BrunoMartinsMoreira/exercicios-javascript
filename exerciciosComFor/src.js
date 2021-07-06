function creatContent() {
   const elements = [{
         tag: 'p',
         text: 'frase 1'
      },
      {
         tag: 'div',
         text: 'frase 2'
      },
      {
         tag: 'section',
         text: 'frase 3'
      },
      {
         tag: 'footer',
         text: 'frase 4'
      },
   ]


   const container = document.querySelector('.container');

   if (container) {
      const div = document.createElement('div');

      for (let i = 0; i < elements.length; i++) {
         let {
            tag,
            text
         } = elements[i];
         let p = document.createElement(tag);
         let textNode = document.createTextNode(text);
         p.appendChild(textNode);
         div.appendChild(p)

      }
      container.appendChild(div);
   }
}
creatContent();