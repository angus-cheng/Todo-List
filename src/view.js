const view = () => {
    const createElement = (tag, className) => {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    }

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

    /**
     * Underscore for private methods
     */
    const _todoText = () => {
        return this.input.value;
    }

    const _resetInput = () => {
        this.input.value = '';
    }

    const displayTodos = (todos) => {
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild);
        }
        if (todos.length == 0) {
            const p = this.createElement('p');
            p.textContent = 'Nothing to do! Add a task?';
            this.todoList.append(p);
        } else {
            todos.forEach(todo => {
                const li = this.createElement('li');
                li.id = todo.id;

                const checkbox = this.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = todo.complete;

                const span = this.createElement('span');
                span.contentEditable = true;
                span.classList.add('editable');

                if (todo.complete) {
                    const strike = this.createElement('s');
                    strike.textContent = todo.text;
                    span.append(strike);
                } else {
                    span.textContent = todo.text;
                }

                const deleteBtn = this.createElement('button', 'delete');
                deleteBtn.textContent = 'Delete';
                li.append(checkbox, span, deleteBtn);

                this.todoList.append(li);
            });
        }
    }

    bindAddTodo = (handler) => {
        this.form.addEventListener('submit', event => {
          event.preventDefault()
      
          if (this._todoText) {
            handler(this._todoText)
            this._resetInput()
          }
        })
      }
      
      bindDeleteTodo = (handler) => {
        this.todoList.addEventListener('click', event => {
          if (event.target.className === 'delete') {
            const id = parseInt(event.target.parentElement.id)
      
            handler(id)
          }
        })
      }
      
      bindToggleTodo = (handler) => {
        this.todoList.addEventListener('change', event => {
          if (event.target.type === 'checkbox') {
            const id = parseInt(event.target.parentElement.id)
      
            handler(id)
          }
        })
      }

    return { initialiseElements };
};

export default view;