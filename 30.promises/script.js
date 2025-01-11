/**
 * Promises 🤞🏻
 *
 */

//skapar en ny variabel som är en promise med callback funktion
//en promis delar ut två värden, antingen resolve eller reject
const promiseOfFutureData = new Promise( (resolve, reject) => {
    //efter tre sek så kommer koden antingen resolve eller reject
	setTimeout(() => {
		resolve("i strong, i halp!");
		// reject("nä jag känner mej litta förkyld");
	}, 3000);
} );
console.log("Waiting for promise result...", promiseOfFutureData);

//pga variabeln är inte en metod/funktion så ska det inte vara () efter namnet
//.then ifall data är true, .catch ifall err är true
//såhär kallar du på den:
promiseOfFutureData
	.then(data => console.log("Yay promise was kept:", data))
	.catch(err => console.log("Promise was broken 🥺. Reason:", err));


// Skapa en funktion somhämtar data från en url samt har en callback i sig
const getJSON = (url, callback) => {
	// skapa ny xmlhttprequest
	const request = new XMLHttpRequest();

	// requesten ska GET datan från url
	request.open("GET", url);

	// eventlistener för varje readystatechange
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