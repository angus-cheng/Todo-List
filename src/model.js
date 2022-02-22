const model = () => {
    let todoList = [];
    const addTodo = (title, description, dueDate, priority, notes) => {
        const todo = {id: todoList.length > 0 ? todoList.length + 1 : 1,
                      title, 
                      description, 
                      dueDate, 
                      priority, 
                      notes, 
                      complete: false};
        todoList.push(todo);
    };
    
    const editTodo = (id, updatedText) => {
        todoList.forEach(todo => {
            todo.id === id ? todo.description = updatedText : todo
        });
    };

    const deleteTodo = id => {
        todoList = todoList.filter(todo => todo.id !== id)
    };

    const toggleTodo = id => {
        todoList.forEach(todo => {
            todo.id === id ? todo.complete = !todo.complete : todo
        });
    };

    const getTodoList = () => todoList;

    return { addTodo, editTodo, deleteTodo, toggleTodo, getTodoList };
};

const projectList = () => {
    return Object.assign({}, todoList);
};

const todoItem = () => {
    return
};

export default model;