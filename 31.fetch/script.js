/**
 * Fetch 🐶
 *
 */

//använder fetch metoden för att hämta ut dogs
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
	.then(data => console.log("data:", data))
	.catch(err => console.log("🚨 Something went wrong:", err));
