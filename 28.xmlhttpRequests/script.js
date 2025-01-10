//     httpRequests
/*
Viktig lingo att kunna
- GET = Hämta data
- POST = Skicka in ny data
- PATCH = (Uppdatera befintlig data)
- PUT = (Skriv över befintlig data)
- DELETE = (Ta bort befintlig data)

statuskod och vad de betyder ifall de börjar på: 
- 1xx = Informational
- 2xx = All is good
- 3xx = Something is not where it was before (or hasn't changed)
- 4xx = Client made a bo-bo
- 5xx = Server made a bo-bo
*/

const getUsers = (callback) => {
    // Create a new XML Http Request
    //skapa en ny xml httpRequest och logga ut readystate på den requesten efter detta steget 
    const request = new XMLHttpRequest();
    console.log("Request readyState 1:", request.readyState,);

    //välj att du vill GET request från jsonplaceholder och logga ut readystate på den requesten efter detta steget
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    console.log("Request readyState 2:", request.readyState,);

    //lägg till eventlistener som körs vid varje readystatechange
    request.addEventListener("readystatechange", () => {
        //Logga alla request statusar, kommer bli från 2-4
        //logga även responsetext, alltså allt som finns i api:n (objekten)
        // console.log("Request readyState 222:", request.readyState);
        // console.log("Request responseText:", request.responseText);
    
        //kolla ifall readystate = 4, kolla sedan ifall statuskoden är 200 (aka success)
        if (request.readyState === 4) {
            if (request.status === 200) {
                // console.log("Request done, yay! Response was:", request.responseText);
                //gör om JSON datan med objekten i responseText med parse till javascript objekt
                const data = JSON.parse(request.responseText);
                //logga ut denna datan i javascript format
                console.log("Got me sum data:", data);

                //skicka i callbacken att det är false i err och att det finns data i data
                callback(false, data);

            } else {
                // om något går fel, logga detta: 
                console.log("DANGER DANGER WILL ROBINSON!!!!!!!!!");

                //skicka i callbacken att det är error i error + vad statuskoden är, fyll inget i data
                callback("Error getting data! Status code is: " + request.status);
            }
        }
    });
    // skicka requesten 
    request.send();
};


// anropa funktionen get users med en callback funktion som har err (error) och data (data) som parametrar
getUsers( (err, data) => {
	console.log("Hello from the callback!");
	console.log("err:", err);
	console.log("data:", data);

    //ifall err är true 
	if (err) {
		alert(err);
		return;
	}

    //gör om arrayen med objekt till listitems och lägg sedan in det i DOM
    document.querySelector("#users").innerHTML = data
        //mapa igenom varje user, ta ut name i alla objekt i arrayen och lägg in dom i en lista
        .map((user) => `<li>${user.name}</li>`)
        //joina med en tom sträng så att det ej blir mellanrum
        .join("");
} );

// klart, logga detta när du har skickat requesten 
console.log("Request sent!");

