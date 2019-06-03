// V2: Requirements

// 1. It should have a function to display todos.
// 2. It should have a function to add new todos.
// 3. It should have a function to change a todo.
// 4. It should have a function to delete a todo.


// 1. It should have a function to display todos.
var todos = ['item 1', 'item 2', 'item 3']; 

function displayTodos() {
    console.log('My todos:', todos); 
}

displayTodos(); 


// 2. It should have a function to add new todos.
function addTodos(todo) {
    todos.push(todo); 
    // you can add functions inside of other functions
    displayTodos(); 
  }
  
  addTodos('item 4'); 


// 3. It should have a function to change a todo.
function changeTodo(position, newValue) {
    todos[position] = newValue; 
    displayTodos(); 
}

changeTodo(0, 'item 1 updated'); 


// 4. It should have a function to delete a todo.
function deleteTodo(position) {
    todos.splice(position, 1); 
    displayTodos();
  }
  
deleteTodo(0); 

  