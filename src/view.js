const view = () => {
    const createElement = (tag, className) => {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    };

    const initialiseElements = () => {
        const app = document.querySelector(':root');

        const title = createElement('h1');
        title.textContent = 'Todos';

        const form = createElement('form');

        const input = createElement('input');
        input.type = 'text';
        input.placeholder = 'Add todo';
        input.name = 'todo';

        const submitButton = createElement('button');
        submitButton.textContent = 'Submit';

        const todoList = createElement('ul', 'todo-list');

        console.log(app);

        form.append(input, submitButton);
        app.append(title, form, todoList);
    }

    return { initialiseElements };
}

export default view;