// V3: Requirements

// 1. It should store the todos array in an object.
// 2. It should have a displayTodos method.
// 3. It should have an addTodo method.
// 4. It should have a changeTodo method.
// 5. It should have a deleteTodo method.



// 1. It should store the todos array in an object.
var todoList = 
{
    todos: ['item 1', 'item 2', 'item 3'],

    // 2. It should have a displayTodos method.
    displayTodos: function() {
        console.log(this.todos); 
    }, 

    // 3. It should have an addTodo method.
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },

    // 4. It should have a changeTodo method.
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue; 
        this.displayTodos();
    }, 

    // 5. It should have a deleteTodo method.
    deleteTodo: function(position) {
        this.todos.splice(position, 2);
        this.displayTodos();
    }

};
