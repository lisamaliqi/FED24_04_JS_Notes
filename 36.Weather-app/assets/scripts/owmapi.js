/**
 * Open Weather Map API
 *
 * <https://openweathermap.org/current>
 */

//hämta api-key som jag själv genererat i openweathermap 
const API_KEY = "a2dcea2a4c82329c40bdaf0ef20c66f3";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const FAKE_DELAY = 1000;


/**
 * Hämta vad vädret är i en stad genom OpenWeatherMap API
 *
 * @param {string} city City to get current weather for
 */
const getCurrentWeather = async (city) => {
    // Hämta vädret i 'city' (detta är vad användaren kommer skriva in sendare)
	const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);

    // Kolla ifall responsen är ok
	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);   // "404 Not Found"
	}

    // Fakea en långsam API
	!!FAKE_DELAY && await new Promise(r => setTimeout(r, FAKE_DELAY));

    // Konvertera responsens body från json
	const data = await response.json();

    // Retunera vädret
	return data;
};
