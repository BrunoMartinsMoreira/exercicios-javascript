function calendar() {
   const content = document.querySelector('p.content');

   if (content) {
      setInterval(() => {
         const date = new Date();

         const currentDate = [date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`,
            date.getMonth() < 10 ? `0${date.getMonth()}` : `${date.getMonth}`,
            date.getFullYear()
         ].join('/');

         const currentTime = [date.getHours(), date.getMinutes(), date.getSeconds()].map((value) =>
            `0${value}`.slice(-2)).join(':');

         content.innerText = `${currentDate} ${currentTime}`
      }, 1000);
   }
}
calendar();