/**
 * Cataas 🐈🐶
 *
 * <https://cataas.com/>
 *
 */
//hämta ut api endpoints
const apiKey = "https://api.thecatapi.com/v1/images/search";
const cataas = "https://cataas.com/cat?json=true";

//hämta ut loading spinner id
const catWrapperEl = document.querySelector("#cat-wrapper");
const loadingSpinnerEl = document.querySelector("#loading-spinner");

console.log("🐈");

//skapa ett klick eventlistener på knappen
//aka när man trycker på knappen så ska man fetcha bilden från cataas, sen ska man byta ut gamla bilden med den nya bilden som är random varje gång man trycker på knappen
document.querySelector("#cat-button").addEventListener("click", () => {
	console.log("Getting kitteh...");

	// Visa loading spinner
	loadingSpinnerEl.classList.remove("hide");

	// hämta katter från webbsidan
	fetch(apiKey)
		.then((res) => {
            //om respons är inte 200 så skicka error 
			if (!res.ok) {
				throw new Error("Could not find kitteh");
			}
            //annars retunera jsonfilen i ett javascript objekt 
			return res.json();
		}) 
		.then((data) => {  //fakea en långsam API med 1,5 sek (för att visa loadingspinner)
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(data);
				}, 1500);
			});
		})
		.then((cat) => {
			console.log("🐱:", cat);

			//detta behövs ifall jag fetchar apiKey:
				//tar ut katten från arrayen först
			const catId = cat[0];
				//Byter bild till katten från länken 
			document.querySelector("#cat-image").setAttribute("src", "https://cdn2.thecatapi.com/images/" + catId.id + ".jpg");
			

			//detta behövs ifall jag fetchar cataas:
				//Byter bild till katten från länken 
			// document.querySelector("#cat-image").setAttribute("src", "https://cataas.com/cat/" + cat._id);

			// dölj loading spinner när bilden visas
			loadingSpinnerEl.classList.add("hide");
	
		})
		.catch(err => console.log("🚨 Failed to fetch cat because:", err));
});