/**
 * async/await 🐶
 *
 */

//hämta data från filen data/cats
fetch("data/cats.json")
	.then(res => {
		if (!res.ok) { //om respons inte är ok (aka något blivit fel med responsen) skicka error meddelande
			throw new Error("Request was not successful!");
		}
		return res.json();
	})
	.then(data => { 
        //ifall allt är okej, skicka datan till consolen
		console.log("data:", data);
	})
	.catch(err => {
        //ifall den fångar ett error (typ fel namn på fil osv) skicka error
		console.log("Nope, something went wrong:", err);
	});



    