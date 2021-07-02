import { makeAutoObservable } from "mobx";
import todos from "../../data";

class TodoStore {
  todos = todos;

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (addedTodo) => {
    addedTodo.id = this.todos.length + 1;
    this.todos.push(addedTodo);
  };

  deleteTodo = (deletedTodo) => {
    const todoDeleted = this.todos.filter((todo) => todo.id !== deletedTodo.id);
    this.todos = todoDeleted;
  };
}
const todoStore = new TodoStore();

export default todoStore;
