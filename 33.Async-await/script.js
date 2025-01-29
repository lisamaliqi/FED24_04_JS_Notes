/**
 * async/await 🐶
 *
 */

/* 
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
		console.log("data from fetch in the beginning:", data);
	})
	.catch(err => {
        //ifall den fångar ett error (typ fel namn på fil osv) skicka error
		console.log("Nope, something went wrong:", err);
	});
 */

// wait for response of fetch
// wait for json-parse
// use data


//detta hämtar ut datan från url som man får från getPets
//dock skickar denna bara vilket url man tar från samt skickar tillbaks returnen, inget om vad url innehåller
const getData = (url) => {
	console.log("Would get data from:", url);
	return "the getData return!";
};


//gör liknande som getData 1, men innehåller en new promise som retunerar en resolve när det har blivit resolved
const getData2 = (url) => {
	console.log("Would get data from:", url);
	return new Promise((resolve, reject) => {
		resolve("who let the promised kittehs out");
	});
};

// const promiseOfData = getData2("lol.json"); // will return a promise of future data



//samma som getData2 men vi behöver inte manuellt skapa en new promise och kalla på resolve()
const getData3 = async (url) => {
	console.log("Would get data from:", url);
	return "who let the async kittehs out";
};

// const data = getData3("lol.json");
// console.log("return value of getData:", data);



// getData, promise-version
// denna metod får man ut datan man efterfrågar från filen
const getData4 = (url) => {
    //retunerar en fetch på url man får in
	return fetch(url)
		.then(res => {
            //om res inte är ok, skicka error
			if (!res.ok) {
				throw new Error("Request was not successful");
			}

            console.log('in first then?');
            
            //annars retunera res.json
			return res.json();
		})
		.then(data => {
			console.log("Got me some data:", data);
			return data;
		});
}


//detta skickar iväg data till getPets funktionen, alltså innehållet på url man skickar in
const getData5 = async (url) => {
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error("Request was not successful");
	}

	const data = await res.json();
	console.log("Got me some data 1:", data);

	return data;
}
 

/* 
// 1. Hämta ut data från cats.json med hjälp av getData5 funktionen
// 2. THEN när det är klart så loggar du ut datan + retunera funktionen getData5 med dogs.json
// 3. dogs.json körs in i getData5 funktionen där vi retunerar den nya datan (som blir dogs.json)
// 4. THEN när det är klart så loggar vi ut den nya datan (dogs.json) i konsollen
getData5("data/cats.json")
	.then(cats => {
		console.log("cats 2:", cats);
		return getData5("data/dogs.json");
	})
	.then(dogs => {
		console.log("dogs 3:", dogs);
	});
 */


const getPets = async () => {
	// const cats = await getData5("data/cats.json");
	// console.log("cats in getPets:", cats);

    //detta istället för det där över
    try {
        //hämta ut arrayen med cats.json
		const catArray = await getData5("data/cats.json");
		console.log("got me some kittehs:", catArray);

        //skicka in det i DOM
		document.querySelector("#cats").innerHTML = catArray
			.map(cat => `<li>${cat.name}</li>`)
			.join("");
            
        
    // const dogs = await getData5("data/dogs.json");
    // console.log("dogs:", dogs);
            
            //detta istället för det där över
        //hämta ut arrayen med dogs.json
        const dogArray = await getData5("data/dogs.json");
        console.log("got me some pupps:", dogArray);

        //skicka in det i DOM
        document.querySelector("#dogs").innerHTML = dogArray
                .map(dog => `<li>${dog.name}</li>`)
                .join("");

    //ifall man fångar upp ett error, logga detta
	} catch (err) {
		console.log("🚨 Caught cats error:", err);
	}

    // const birds = await getData("data/birds.json");
	// console.log("birds:", birds);

    // const pets = await getData("data/pets.json");
	// console.log("pets:", pets);
};


//kalla på getPets funktionen som i sin tur kallar på en getData funktion
getPets();
