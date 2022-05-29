const controller = (model, view) => {
    this.onTodoListChanged(model.todos);
    onTodoListChanged = (todos) => {
        view.displayTodos(todos);
    }

    const handleAddTodo = (todoText) => {
        model.addTodo(todotext);
    }

    const handleEditTodo = (id, todoText) => {
        model.editTodo(id, todoText);
    }

    const handleDeleteTodo = id => {
        model.deleteTodo(id);
    }

    const handleToggleTodo = id => {
        model.toggleTodo(id);
    }

    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);
    this.model.bindTogoListChanged(this.onTodoListChanged);

    return {model, view};
}

export default controller;