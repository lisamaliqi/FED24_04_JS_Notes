/**
 * Cataas 🐈🐶
 *
 * <https://cataas.com/>
 *
 */
console.log("🐈");

//skapa ett klick eventlistener på knappen
//aka när man trycker på knappen så ska man fetcha bilden från cataas, sen ska man byta ut gamla bilden med den nya bilden som är random varje gång man trycker på knappen
document.querySelector("#cat-button").addEventListener("click", () => {
	console.log("Getting kitteh...");
	// hämta katter från `https://cataas.com/cat?json=true`
	fetch("https://cataas.com/cat?json=true")
		.then((res) => {
            //om respons är inte 200 så skicka error 
			if (!res.ok) {
				throw new Error("Could not find kitteh");
			}
            //annars retunera jsonfilen i ett javascript objekt 
			return res.json();
		})
		.then((cat) => {
			console.log("🐱:", cat);
			// byt bilden till katten från länken 
			document.querySelector("#cat-image").setAttribute("src", "https://cataas.com/cat/" + cat._id);
		})
		.catch(err => console.log("🚨 Failed to fetch cat because:", err));
});