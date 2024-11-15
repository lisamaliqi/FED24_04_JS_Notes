/**
 * Simple Todos
 *
 * STEP 1
 * Render the initial todos. Write code for adding a new todo when the user
 * submits the form. See pseudo-code below for help getting started!
 *
 * STEP 2
 * When a user clicks on a todo (listitem), find the todo and set it as completed.
 *
 * STEP 3
 * Add a button with the text "Toggle" to each listitem that **toggles** the
 * todo's status (if its `completed` is `true` then it should be set to `false`
 * and vice versa).
 *
 * STEP 4
 * Add another button to each listitem with the text "Delete" to each listitem
 * that deletes the todo.
 *
 */




/*
Steg 1 - Sortera todos
Lägg till funktionalitet som sorterar listan av todos alfabetiskt.
Glöm inte sortera om listan efter användaren lagt till en ny todo!
 
Steg 2 - Markera en todo som avklarad
Lägg till funktionalitet som markerar en todo som avklarad när man klickar på den. Använd .find() för att hitta rätt todo, ändra dess completed och rendera om listan.
Använd event-bubbling!
 
Steg 2.5 - Toggla en todo
En todo ska kunna växla mellan att vara avklarad och ej klar.
 
⭐️ Steg 3 - Radera en todo
Lägg till funktionalitet för att radera en todo när man klickar på en Delete-knapp (som ska finnas på varje todo).
🚀 Kan du använda .filter() för att ta bort en todo? 🤔
*/





// Get references to DOM elements
const todolistEl = document.querySelector("#todolist");
const formCreateTodoEl = document.querySelector("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector('#inputNewTodoTitle');

// List of todos
const todos = [
	{
		title: "Eat",
		completed: false,
	},
	{
		title: "Code",
		completed: true,
	},
	{
		title: "Sleep",
		completed: true,
	},
	{
		title: "Take over the world",
		completed: false,
	},
];

// Listen for submit-events on the form
formCreateTodoEl.addEventListener("submit", (e) => {
	// Stop form from being submitted to the server and causing a page reload
	e.preventDefault();

	// Get title from input-field
   const newTodoTitle = inputNewTodoTitleEl.value;

	// Abort if input is empty
   if (!newTodoTitle) {
      return false;
   };

	// Create a new todo-object
   const newTodo = {
      title: newTodoTitle,
      completed: false,
   };

	// Add it to the todos-array
   todos.push(newTodo);

	// Render a representation of the updated todos-array
	renderTodos();

	// Finally, clear the input-field
   inputNewTodoTitleEl.value = '';
});

//listen for click-events on the todos list
todolistEl.addEventListener('click', (e) => {
   
    if (e.target.tagName === 'LI') {
        //user clicked on a list item
        console.log('you clicked on titile: ', e.target.innerText);

        //helt ärligt jag fattar typ inte detta, måste gå igenom
        const clickedTodoTitle = e.target.innerText;

        //search todos for the todo with the matching title
        const clickedTodo = todos.find((todo) => {
            return (todo.title === clickedTodoTitle);         
        });
        console.log('result from find: ', clickedTodo);

        //toggle between completed and not completed
        //vad betyder ens detta?!?!?!?
        clickedTodo.completed = !clickedTodo.completed;
        
        
        
        

     /*  todos.forEach((todo) => {
         if (todo.title === e.target.innerText) {
            todo.completed = true;
         };
      }); */

      //re-render todos so the DOM reflects the current truth
      renderTodos();
   };   
});

// Render a representation of the todos-array to the DOM
const renderTodos = () => {
	// Clear any existing listitems from the DOM
    todolistEl.innerHTML = ''; //rätt

    //sortera våra todos innan vi loopar över dom
    sortTodos();

    // Loop over the todos-array and create a new listitem for each todoitem
   todos.forEach((todo) => { //rätt
	   // Any completed items should also have the `completed` CSS-class!
      if(todo.completed) {
         todolistEl.innerHTML += `<li class="list-group-item completed">${todo.title}</li>`;
         //lägger till completed i class delen OM todo.completed är true
      } else {
         todolistEl.innerHTML += `<li class="list-group-item">${todo.title}</li>`;//glömde +=, gjorde bara =
         //kan lägga till classen direkt i denna kod över
      };
   });
};

// sort todos
const sortTodos = () => {
    //sort by title 
    todos.sort((a, b) => {
        //detta sorterar rätt på å ä ö
        return a.title.localeCompare(b.title, 'sv');

/* 
        //detta sorterar inte Ä rätt pga teckenkoding 
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        }

        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        }
        //om de är samma, retunera 0
        return 0;
         */


    });
};

// Render the initial representation of the todos-array
renderTodos();