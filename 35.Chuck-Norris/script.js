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
    fetch(chuckAPI)
    .then((res) => {
        if (!res.ok) {
            throw new Error("Could not find the joke :(");
        }
        return res.json();
    }) 
    
    .then((joke) => {
        paraEl.innerText = joke.value;
    })

    .catch ((err) => {
        console.log('failed to get get joke because: ', err);
        errorTextEl.classList.remove('hide');
        errorTextEl.innerText = err;
    });
};


// Johans version av koden aka lite bättre med async await och try catch
const getChuckNorrisFact = async () => {
	try {
		// Fetch URL and wait for promise to resolve
		const res = await fetch(chuckAPI);

		// Check if the received response wasn't a successful response
		if (!res.ok) {
			throw new Error("Chuck Norris is unavailable to take your call right now");
		}

		// Convert response from JSON to a JavaScript value and wait for it to resolve
		const fact = await res.json();

		// We got ze data, output it to DOM
		paraEl.innerText = fact.value;

	} catch (err) {
		errorTextEl.innerText = "You don't summon Chuck Norris, Chuck Norris summons you! " + err;

	};
};



//kalla funktionen varje gång man klickar på knappen jokeBtn
jokeBtnEl.addEventListener('click', () => {
    getChuckNorrisFact();
});

//kalla funktionen så ett skämt kommer upp när man laddar om sidan
fetchChuch();