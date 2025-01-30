/**
 * 🌧️.
 *
 */
const alertEl = document.querySelector("#alert");
const forecastEl = document.querySelector("#forecast");
const spinnerEl = document.querySelector("#spinner");

//ALERT functions
const hideErrorAlert = () => {
	alertEl.className = "hide";
}
const showErrorAlert = (msg) => {
	alertEl.innerText = msg;
	alertEl.className = "alert alert-danger";
}
const showInfoAlert = (msg) => {
	alertEl.innerText = msg;
	alertEl.className = "alert alert-info";
}
const showWarningAlert = (msg) => {
	alertEl.innerText = msg;
	alertEl.className = "alert alert-warning";
}

/**
 * Uppdatera UI med datan vi får från API när vi skriver in staden
 *
 * @param data
 */
const renderCurrentWeather = (data) => {
    // Transformera varje weather till en listitem
	const weatherConditions = data.weather.map((condition) => {
		return `<li><img src="http://openweathermap.org/img/wn/${condition.icon}@2x.png" alt="${condition.main}" title="${condition.description}"></li>`;
	});

    //Ta reda på ifall det är dag eller natt när vädret senast uppdaterades
    //om det är efter sunrise och innan sunset = daytime, annars nighttime
	const banner = (data.dt > data.sys.sunrise && data.dt < data.sys.sunset)
    ? "assets/images/day.svg"
    : "assets/images/night.svg";


    // Visa när vädret uppdaterades senast 
	const freshness = new Date(data.dt * 1000);


	// Skicka ut forecast till DOM
	forecastEl.innerHTML = `
		<img src="${banner}" class="card-img-top">
        
		<div class="card-body">
			<h5 class="card-title" id="location">
				<span id="city">${data.name}</span>,
				<span id="country">${data.sys.country}</span>
			</h5>
			<p class="temp">
				<span id="temperature">${data.main.temp}</span>
				&deg;C
			</p>
			<p class="humidity">
				<span id="humidity">${data.main.humidity}</span>
				&percnt; humidity
			</p>
			<p class="wind">
				<span id="windspeed">${data.wind.speed}</span>
				m/s
			</p>

            <ul class="conditions">
				${weatherConditions.join("")}
			</ul>

            <p id="freshness" class="small">${freshness.toLocaleString("sv-SE")}</p>
		</div>
	`;
};


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

    // Göm tidigare väder som visats genom att lägga till hide klassen
	forecastEl.classList.add("hide");
    // Göm alert diven så att den inte syns från start, utan syns endast när det blir något fel
    hideErrorAlert();
    
    // Hämta ut innehållet som användaren skriver i formen 
	const city = e.target.query.value.trim();

	if (city.length < 3) {
		// alert("Too few characters in city, at least 3 is required!")

        //skriv i DOM att man ska skriva mer än 3 bokstäver
        showInfoAlert("Please enter at least 3 characters");
		return;
	};

	try {
        // Visa loading spinner
		spinnerEl.classList.remove("hide");

        // Få ut vädret för staden användaren skriver in
		console.log(`Search for city "${city}"`);
		const data = await getCurrentWeather(city);
		console.log(`Current weather conditions in "${city}:"`, data);

        // Kalla funktionen som renderar ut datan i DOM
		renderCurrentWeather(data);

        //ta bort hide klassen så att det som renderas syns 
        forecastEl.classList.remove("hide");

	} catch (err) {
		// alert(err);

        //Skriv i DOM vad för error det blir samt att det är rött
        showErrorAlert(err);
	};

    // Dölj loading spinner när man fått in datan och visar upp den
	spinnerEl.classList.add("hide");
});