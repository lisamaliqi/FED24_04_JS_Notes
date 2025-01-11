/**
 * Fetch 🐶
 *
 */

//använder fetch metoden för att hämta ut dogs och SEDAN hämta ut katter
fetch("data/dogs.json")
	.then((res) => {
        //om respons INTE är mellan 200-299 (aka success) så ska man skicka ett error
		if (!res.ok) {
			throw new Error("Request was not successful!");
		}
        //konvertera om json responsen till ett javascript objekt som är i en array 
		return res.json();
	})
    //logga ut datan från dogs
	.then((data) => {
        //logga ut dogs samt skicka in det i DOM
        console.log("dogs:", data);
        document.querySelector('#dogs').innerHTML = data
            .map(dog => `<li>${dog.name}</li>`)
            .join('');

        //retunera sedan att du fetchar cats
        return fetch('data/cats.json');
    })
    .then((res) => {
        if(!res.ok) {
            throw new Error('Request was not successful!');
        }

        //retunera json filen som konverterad till ett javascript objekt 
        return res.json();
    })
    .then((data) => {
        //logga ut dogs samt skicka in det i DOM
        console.log("cats:", data);
        document.querySelector('#cats').innerHTML = data
            .map(cat => `<li>${cat.name}</li>`)
            .join('');
    })
	.catch(err => console.log("🚨 Something went wrong:", err));


/*
//man fetchar katter samtidigt som man fetchar hundarna och katterna 
// Gör samma för katter:
fetch("data/cats.json")
	.then((res) => {
		if (!res.ok) {
			throw new Error("Request was not successful!");
		}
		return res.json();
	})
	.then((data) => {
        console.log("cats:", data);
		document.querySelector("#cats").innerHTML = data
			.map(cat => `<li>${cat.name}</li>`)
			.join("");
	})
	.catch(err => console.log("🚨 Something went wrong:", err));
*/ 
