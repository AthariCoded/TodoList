import { makeAutoObservable } from "mobx";
import todos from "../../data";

class TodoStore {
  todos = todos;

  constructor() {
    makeAutoObservable(this);
  }

  todoFinished = (todoFinished) => {
    const todo = this.todos.find((todo) => todo.id === todoFinished.id);
    if (todo.status === "undone") todo.status = "done";
    else todo.status = "undone";
  };

  todosAdd = (addedTodo) => {
    addedTodo.id = this.todos.length + 1;
    //status= undone if statement to be done when clicked
    this.todos.push(addedTodo);
  };

  deleteTodo = (deletedTodo) => {
    const todoDeleted = this.todos.filter((todo) => todo.id !== deletedTodo.id);
    this.todos = todoDeleted;
  };
}
const todoStore = new TodoStore();

export default todoStore;
