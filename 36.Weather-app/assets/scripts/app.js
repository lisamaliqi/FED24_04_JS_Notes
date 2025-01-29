/**
 * 🌧️.
 *
 */
const alertEl = document.querySelector("#alert");
const forecastEl = document.querySelector("#forecast");
const spinnerEl = document.querySelector("#spinner");


// Lyssna efter när användaren skickar submit på en stad den vill kolla vädret för
document.querySelector("#search-form").addEventListener("submit", async (e) => {
    // Prevent så att sidan ej startar om varje gång man skickar in submit
	e.preventDefault();

	// Get value from input-field
	// const city = document.querySelector("#query").value;

    // console.log('e: ', e);
    // console.log('e.target: ', e.target);
    // console.log('e.target.query: ', e.target.query);
    // console.log('e.target.query.value: ', e.target.query.value);
    
    // Hämta ut innehållet som användaren skriver i formen 
	const city = e.target.query.value.trim();

	if (city.length < 3) {
		// TODO: Replace this with a proper Bootstrap Alert component
		alert("Too few characters in city, at least 3 is required!")
		return;
	};

	try {
        // Få ut vädret för staden användaren skriver in
		console.log(`Search for city "${city}"`);
		const data = await getCurrentWeather(city);
		console.log(`Current weather conditions in "${city}:"`, data);

	} catch (err) {
		// TODO: Replace this with a proper Bootstrap Alert component
		alert(err);
	};
});