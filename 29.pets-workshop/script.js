/**
 * Pets
 *
 * First send a request to `data/pets.json`,
 * _THEN_ send a request to each `url` in the response
 *
 * For each response, output it's data to the corresponding list
 * 
 *
 * MINI-WORKSHOP
 *
 * STEG 1
 * Hämta `data/pets.json` och därefter för varje objekt i svaret
 * så hämta den URL som finns i objektet. Skriv ut svaret till console.
 *
 * STEG 2
 * Ändra koden från steg 1 så att du skriver ut informationen om varje
 * husdjur till varsin egen UL i DOM (det finns redan UL-element) för
 * de olika kategorierna av husdjur.
 *
 */

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

//kalla på funktionen med två värden i callback delen 
getJSON('data/pets.json', (err, petCategories) => {
    //om error är true, skicka detta meddelandet!
    if(err) {
        alert('something went wrong, ERROR!')
        return;
    }
    //logga ut vad för data petcategories innehåller
    console.log('the data for step 1 is: ', petCategories);
    
    //pga ändrat json till javascript med parse så kan jag göra forEach för varje objekt i arrayen
    petCategories.forEach((petCategory) => {
        console.log('one category at a time: ', petCategory);
        
        //kör funktionen getJSON igen för att ta ut url i varje petCategory
        //tar ut url från petcategory samt lägger in infor för callback funktionen (err och pets)
        getJSON(petCategory.url, (err, pets) => {
            //tar ut datan från vad som finns i varje pets json fil
            console.log(`got me some ${petCategory.title}: `, petCategory, pets);

            //gör en output på detta i DOM
            //säger att det är id + tar ut namnet på id som stämmer med html id-namn (slipper skriva flera gånger manuelt)
            //mapar (alltså går igenom varje pet och retunerar ut det som står)
            document.querySelector('#' + petCategory.id).innerHTML = pets
            .map((pet) => `<li>${pet.name} (${pet.age} years old)</li>`)
            .join('');
        });
    });
});

 

//exempel på callback hell (aka javascirpt triangle of doom)
/*
// Get cattos 🐱
getJSON("data/cats.json", (err, cats) => {
	// Got cats!
	console.log("Got list of cats:", cats);
	// Get doggos 🐶
	getJSON("data/dogs.json", (err, dogs) => {
		// Got woofs!
		console.log("Got list of tail-waggers:", dogs);
		// Get flying projectiles 🦜🚀
		getJSON("data/birds.json", (err, birds) => {
			// Got woofs!
			console.log("Got list of flying projectiles:", birds);
		});
	});
});

// Callback Hell (a.k.a. JavaScript Triangle of Doom)
getJSON("data/cats.json", (err, cats) => {
	getJSON("data/dogs.json", (err, dogs) => {
		getJSON("data/birds.json", (err, birds) => {
			console.log("😰");
		});
	});
});
*/