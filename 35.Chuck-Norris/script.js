/**
 * Chuck Norris Joke of the Day
 *
 * <https://api.chucknorris.io/>
 * <https://api.chucknorris.io/jokes/random>
 *  *
 * STEG 1
 * Hämta ett slumpmässigt faktum från ovan API så fort sidan laddar och visa det i paragrafen med id `joke`.
 *
 * STEG 2
 * Lägg till en knapp som hämtar ett slumpmässigt faktum när man klickar på knappen. Det ska fortfarande hämtas ett slumpmässigt faktum när sidan laddas.
 *
 * STEG 3
 * Lägg in felhantering för om hämtningen av ett slumpmässigt faktum misslyckas (av någon anledning). Visa felmeddelandet på sidan (i DOM).
 */


const chuckAPI = 'https://api.chucknorris.io/jokes/random';

const paraEl = document.querySelector('#joke');
const jokeBtnEl = document.querySelector('#jokeBtn');
const errorTextEl = document.querySelector('#errorText');


const fetchChuch = () => {
    return fetch(chuckAPI)
    .then((res) => {
        if (!res.ok) {
            throw new Error("Could not find the joke :(");
        }
        return res.json();
    }) 
    .then((joke) => {
        console.log(joke.value);
        
        paraEl.innerText = joke.value;
    })
    .catch ((err) => {
        console.log('failed to get get joke because: ', err);
        errorTextEl.classList.remove('hide');
        errorTextEl.innerText = err;
    });
};

//kalla funktionen varje gång man klickar på knappen jokeBtn
jokeBtnEl.addEventListener('click', () => {
    fetchChuch();
});

//kalla funktionen så ett skämt kommer upp när man laddar om sidan
fetchChuch();