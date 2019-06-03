// V10: Requirements
// There should be a way to create delete buttons
// There should be a delete button for each todo
// Each li should have an id that has the todo position
// Delete buttons should have access to the todo id 
// Clicking delete should update todoList.todos and the DOM

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
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement('li'); 
            todoLi.textContent = todoList.todos[i].todoText;
            var todo = todoList.todos[i]; 
            var todoTextWithCompletion = ''; 

            if (todo.completed === true) {
                todoTextWithCompletion = '[x] ' + todo.todoText; 
            } else {
                todoTextWithCompletion = '[ ] ' + todo.todoText; 
            }

            todoLi.id = i; 
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton()); 
            todoUl.appendChild(todoLi);
        }
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