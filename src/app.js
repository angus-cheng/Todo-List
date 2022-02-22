import view from './view.js';
import model from './model.js';
import controller from './controller.js';

const app = controller(model(), view());

app.model.addTodo("Take trash out", "Wow", "3421", 0, "no");
app.model.addTodo("Read book", "Nice", "3831", 1, "best book");
app.model.editTodo(2, "Not Nice");
app.model.deleteTodo(1);
app.model.toggleTodo(2);
app.view.initialiseElements();
console.log(app.model.getTodoList());