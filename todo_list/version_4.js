// V4: Booleans - Requirements
// 1. todoList.addTodo should add objects.
// 2. todoList.changeTodo should change the todoText property.
// 3. todoList.toggleCompleted should flip the completed property. 

var todoList = 
{
    todos: [], 

    displayTodos: function() {
        console.log('My Todos:', this.todos);
    },

// 1. todoList.addTodo should add objects.
    addTodo: function(todoText) {
        // you can create objects inside methods 
        this.todos.push({
            description: todoText,
            completed: false
        });
        this.displayTodos();
    }, 

// 2. todoList.changeTodo should change the todoText property.
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText; 
        this.displayTodos();
    },    
    
    deleteTodo: function(positon) {
        this.todos.splice(position, 1); 
    }, 

// 3. todoList.toggleCompleted should flip the completed property. 
    toggleCompleted: function(position) {
        var todo = this.todos[position]; 
        todo.completed = !todo.completed; 
        this.displayTodos(); 
    }
};

todoList.addTodo('item 1');
todoList.toggleCompleted(0);
