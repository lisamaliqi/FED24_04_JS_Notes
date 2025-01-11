/**
 * XMLHttpRequest
 *
 * MINI-WORKSHOP: Skriv funktionen `getJSON` som kan hämta vilken URL som helst
 * och ÄNDÅ ta emot en callback som får två parametrar där den första är om något
 * går fel och den andra är datan från om requesten lyckas.
 */

// Get data from a URL
const getJSON = (url, callback) => {
	// Create a new XML Http Request
	const request = new XMLHttpRequest();

	// Set request to GET data from `url`
	request.open("GET", url);

	// Attach an event-listener to the request
	request.addEventListener("readystatechange", () => {
		// Log request status
		// console.log("Request readyState:", request.readyState);
		// console.log("Request responseText:", request.responseText);

		// Is request done?
		if (request.readyState === 4) {
			// Yay request is finished!

			// Was the request successful?
			if (request.status === 200) {
				// 200 OK
				// console.log("Request done, yay! Response was:", request.responseText);

				// Take the JSON-STRING in responseText and PARSE it into a JavaScript value
				const data = JSON.parse(request.responseText);

				callback(false, data);

			} else {
				// Something went wrong 😢
				console.log("DANGER DANGER WILL ROBINSON!!!!!!!!!");
				callback("Error getting data! Status code is: " + request.status);
			}
		}
	});

	// Send the request
	request.send();

	console.log("Request sent to:", url);
}

// FIRST get users
getJSON("https://jsonplaceholder.typicode.com/users", (err, users) => {
	if (err) {
		// Something went wrong 😢
		alert(err);
		return;
	}

	console.log("Got me some users", users);

	// Quickly transform the array of object into listitems and output it to DOM
	document.querySelector("#users").innerHTML = users
		.map((user) => `<li>${user.name} (${user.email})</li>`)
		.join("");

	// THEN get posts
	getJSON("https://jsonplaceholder.typicode.com/posts", (err, posts) => {
		if (err) {
			// Something went wrong 😢
			alert(err);
			return;
		}

		console.log("Got me some posts, posts is:", posts);
		console.log("Got me some posts, users is:", users);

		// Output post title along with the author's name
		document.querySelector("#posts").innerHTML = posts
			.map((post) => `<li>${post.title} <em>by ${users.find(user => user.id === post.userId).name}</em></li>`)
			.join("");
	} );

} );

// Done (?)
console.log("All requests sent!");