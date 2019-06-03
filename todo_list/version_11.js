// V11: Requirements

// 1. todoList.toggleAll should use forEach
// 2. view.displayTodos should use forEach


// Model: contains data and logic to create, change, delete todos 
// and to toggle whether todo is completed
var todoList = 
{
    todos: [], 

    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    }, 

    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    }, 

    deleteTodo: function(position) {
        this.todos.splice(position, 1); 
    }, 

    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },

    toggleAll: function() {
        var totalTodos = this.todos.length; 
        var completedTodos = 0; 

        // Get completed todos
        this.todos.forEach(function(todo) {
            if (todo.completed === true) {
                completedTodos++; 
            }
        });

        this.todos.forEach(function(todo) {
            // Case 1: If everything is true, make everything false
            if (completedTodos === totalTodos) {
                todo.completed = false;
            // Case 2: Otherwise, make everything true    
            } else {
                todo.completed = true; 
            }
        });
    }
};

// Controller: Communicates with the todos in Model when with the View to represent when todos change  
var handlers = {
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput'); 
        todoList.addTodo(addTodoTextInput.value); 
        addTodoTextInput.value = '';
        view.displayTodos();
    }, 

    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput'); 
        var changeTodoTextInput = document.getElementById('changeTodoTextInput'); 
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value); 
        changeTodoPositionInput.value = ''; 
        changeTodoTextInput.value = ''; 
        view.displayTodos();
    },

    deleteTodo: function(position) {
        todoList.deleteTodo(); 
        view.displayTodos();
    }, 

    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = ''; 
        view.displayTodos();
    },

    toggleAll: function() {
        todoList.toggleAll(); 
        view.displayTodos();
    }
};

// View: Creates the necessary DOM elements required to display the todos and represents any changes  
var view = {
    displayTodos: function() {
        var todoUl = document.querySelector('ul');
        todoUl.innerHTML = '';
        
        todoList.todos.forEach(function(todo, position) {

            var todoLi = document.createElement('li'); 
            var todoTextWithCompletion = ''; 

            if (todo.completed === true) {
                todoTextWithCompletion = '[x] ' + todo.todoText; 
            } else {
                todoTextWithCompletion = '[ ] ' + todo.todoText; 
            }

            todoLi.id = position; 
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton()); 
            todoUl.appendChild(todoLi);
        }, this); 
    },

    createDeleteButton: function() {
        var deleteButton = document.createElement('button'); 
        deleteButton.textContent = 'Delete'; 
        deleteButton.className = 'deleteButton'; 
        return deleteButton;
    }, 
    setUpEventListeners: function() {
        var todoUl = document.querySelector('ul'); 

        todoUl.addEventListener('click', function() {

        // Get the element that was clicked on
        var elementClicked = event.target;

        // Check if elementClicked has a delete button
        if (elementClicked.className === 'deleteButton') {
            handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};

view.setUpEventListeners(); 