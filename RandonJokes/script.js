const jokesContainer = document.querySelector('.joke');
const btn = document.querySelector('.next')

function fetchRandomJokes() {
   fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(joke => {
         jokesContainer.innerText = joke.value
      })
}

btn.addEventListener('click', fetchRandomJokes)
fetchRandomJokes()
