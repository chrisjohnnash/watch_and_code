// V1: Arrays - Requirements

// 1. It should have a place to store todos.
// 2. It should have a way to display todos.
// 3. It should have a way to add new todos.
// 4. It should have a way to change a todo. 
// 5. It should have a way to delete a todo. 

// 1. It should have a place to store todos.
var todos = ['item 1', 'item 2', 'item 3']; 

// 2. It should have a way to display todos.
console.log(todos); 

// 3. It should have a way to add new todos.
todos.push('item 4'); 
console.log(todos);

// 4. It should have a way to change a todo. 
todos[0] = 'item 1 updated'; 
console.log(todos); 

// 5. It should have a way to delete a todo. 
todos.splice(0, 1); // remove 'item 1 updated'
console.log(todos);