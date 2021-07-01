import { makeAutoObservable } from "mobx";
import todos from "../../data";

class TodoStore {
  todos = todos;

  constructor() {
    makeAutoObservable(this);
  }

  todosAdd = (addedTodo) => {
    addedTodo.id = this.todos.length + 1;
    this.todos.push(addedTodo);
  };

  todosDelete = (deletedTodo) => {
    const todoDeleted = this.todos.filter((todo) => todo.id !== deletedTodo.id);
    this.todos = todoDeleted;
  };
}
const todoStore = new TodoStore();

export default todoStore;
