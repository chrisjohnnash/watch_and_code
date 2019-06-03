// V7: Requirements

// There should be a “Display todos” button and a “Toggle all” button in the app.
// Clicking “Display Todos" should run todoList.displayTodos.
// Clicking “toggle All” should run todoList.toggleAll.

var todoList = 
{
    todos: [], 

    displayTodos: function() { 
        if (this.todos.length === 0) {
            console.log('Todo list is empty!');
        } else {
            console.log('My Todos:');
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log('[x]', this.todos[i].todoText);
                } else {
                    console.log('[ ]', this.todos[i].todoText); 
                }
            }
        }
    }, 

    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    }, 

    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    }, 

    deleteTodo: function(position) {
        this.todos.splice(position, 1); 
        this.displayTodos();
    }, 

    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },

    toggleAll: function() {
        var totalTodos = this.todos.length; 
        var completedTodos = 0; 

        // Get completed todos
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        // If everything is true, make everything false
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        
        // Otherwise, make everything true
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true; 
            }
        }

        this.displayTodos();
    }
};

var displayTodosButton = document.getElementById('displayTodosButton'); 

displayTodosButton.addEventListener('click', function() {
    todoList.displayTodos();
});

var toggleAllButton = document.getElementById('toggleAllButton');

toggleAllButton.addEventListener('click', function() {
    todoList.toggleAll(); 
}); 

