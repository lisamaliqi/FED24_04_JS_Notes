/**
 * Pets
 *
 * First send a request to `data/pets.json`,
 * _THEN_ send a request to each `url` in the response
 *
 * For each response, output it's data to the corresponding list
 */

// Skapa en funktion somhämtar data från en url samt har en callback i sig
const getJSON = (url, callback) => {
	// skapa ny xmlhttprequest
	const request = new XMLHttpRequest();

	// requesten ska GET datan från url
	request.open("GET", url);

	// eventlistener för varhe readystatechange
	request.addEventListener("readystatechange", () => {
		//är requesten klar samt status på 200 (aka success)?
		if (request.readyState === 4) {
			if (request.status === 200) {
                //Ta json-strängen i responseText och PARSE det till javascript objekt 
				const data = JSON.parse(request.responseText);
                //skicka sedan i callbacken att det är false i error och att det finns data i data
				callback(false, data);
			} else {
				// Ifall något blev fel alltså error
				console.log("DANGER DANGER WILL ROBINSON!!!!!!!!!");
				callback("Error getting data! Status code is: " + request.status);
			}
		}
	});

	//skicka requesten 
	request.send();

	console.log("Request sent to:", url);
}