/**
* Async Todos
 *
 * STEG 1.
 * Skriv funktionen `fetchTodos()` som gör en GET-request till
 * `http://localhost:3001/todos`, översätter från JSON till JavaScript-array
 * och returnerar den.
 *
 * STEG 2.
 * Skriv funktionen `getAndRenderTodos()` som kallar på `fetchTodos()`, väntar på den
 * och tar datan och skriver över `todos`. Därefter kallar den på `renderTodos()`.
 *
 */
// Get references to DOM elements
const todolistEl = document.querySelector("#todolist");
const completedTodolistEl = document.querySelector("#completed-todolist");
const formCreateTodoEl = document.querySelector("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector("#inputNewTodoTitle");


// List of todos
let todos = [];
/**
 * Fetch all todos from the API and return them
 *
 */
const fetchTodos = async () => {
	//fetcha (GET-request) den http addressen
	const res = await fetch('http://localhost:3001/todos');

	//om responsen inte är okej, skicka error och varför det ej va ok
	if (!res.ok) {
		throw new Error(`Response was not OK. Status: ${res.status} ${res.statusText}`);
	};

	//konvertera res från json format till ett javascript objekt och ger data det värdet 
	const data = await res.json();
	return data;
};

/**
 * Invokes `fetchTodos`, updates our local copy `todos` and then
 * invokes `renderTodos`
 */
const getAndRenderTodos = async () => {
	// kalla på fetchTodos() för att GET todos från API 
	const fetchedTodos = await fetchTodos();

	// uppdatera din tomma lokala array av todos med de todos som har fetchats från api
	todos = fetchedTodos;

	// Kalla renderTodos() för att rendera ut dom
	renderTodos();
}


// Render a representation of the todos-array to the DOM
const renderTodos = () => {
	// Sort our todos before rendering them
	sortTodos();

	// Map over the unfinished todos and _transform_ each todo into a string
	todolistEl.innerHTML = todos
		.filter(todo => {
			return todo.completed === false;
		})
		.map((todo) => {
			return `
				<li class="list-group-item" data-todo-id="${todo.id}">
					<span>${todo.title}</span>
					<button class="btn btn-danger btn-sm">Delete</button>
				</li>
			`;
		})
		.join("");

	// Map over the finished todos and _transform_ each todo into a string
	completedTodolistEl.innerHTML = todos
		.filter(todo => {
			return todo.completed;
		})
		.map((todo) => {
			return `
				<li class="list-group-item completed" data-todo-id="${todo.id}">
					<span>${todo.title}</span>
					<button class="btn btn-danger btn-sm">Delete</button>
				</li>
			`;
		})
		.join("");
};


// Sort todos
const sortTodos = () => {
	// Sort by title
	todos.sort((a, b) => {
		return a.title.localeCompare(b.title, "sv");
	});
};


// Listen for submit-events on the form
formCreateTodoEl.addEventListener("submit", (e) => {
	// Stop form from being submitted to the server and causing a page reload
	e.preventDefault();

	// Get title from input-field
	const newTodoTitle = inputNewTodoTitleEl.value.trim();

	// Abort if input is empty
	if (newTodoTitle === "") {
		alert("No todo for you!");
		return false;
	};

	// Find the higest ID for a todo using reduce
	const maxId = todos.reduce((maxId, todo) => {
		if (todo.id > maxId) {
			return todo.id;
		}
		return maxId;
	}, 0);

	// Create a new todo-object
	const newTodo = {
		id: maxId + 1,
		title: newTodoTitle,
		completed: false,
	};

	// Add it to the todos-array
	todos.push(newTodo);

	// Render a representation of the updated todos-array
	renderTodos();

	// Finally, clear the input-field
	inputNewTodoTitleEl.value = "";
});


// Get all todos lists and listen for clicks
document.querySelectorAll("ul.todos").forEach((listEl) => {
	// Listen for click-events on each todos list
	listEl.addEventListener("click", (e) => {
		console.log("You clicked on either the whole list, or one of its children", e.target);

		if (e.target.tagName === "SPAN") {
			// User clicked on a listitem, get the todo id from parent `li`
			const clickedTodoId = Number(e.target.parentElement.dataset.todoId);

			// Search todos for the todo with the matching title
			const clickedTodo = todos.find((todo) => {
				return (todo.id === clickedTodoId);
			});

			console.log("Result from find:", clickedTodo);

			// If no todo was found, bail
			if (!clickedTodo) {
				return;
			};

			// Set completed to true on the found todo
			clickedTodo.completed = !clickedTodo.completed;

			// Re-render todos so the DOM reflects the current truth
			renderTodos();

		} else if (e.target.tagName === "BUTTON") {
			// User clicked on a button, get the todo id from closest `li`
			const clickedTodoId = Number(e.target.closest("li").dataset.todoId);

			// Using filter to get all todos that are NOT matching the
			// id of the todo we want to remove
			todos = todos.filter((todo) => {
				return todo.id !== clickedTodoId;
			});

			// Render updated todos
			renderTodos();
		};
	});
});


// Render the initial representation of the todos-array
getAndRenderTodos();