import { makeAutoObservable } from "mobx";

class TodoStore {
  todos = [];

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
