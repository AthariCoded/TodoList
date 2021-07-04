import { makeAutoObservable } from "mobx";
import todos from "../../data";
import axios from "axios";
class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:8001/todos");
      this.todos = response.data;
    } catch (error) {
      console.log("fetchTodos: ", error);
    }
  };

  todoFinished = async (updateTodo) => {
    try {
      await axios.put(
        `http://localhost:8001/todos/${updateTodo.id}`,
        updateTodo
      );
      const todo = this.todos.find((todo) => todo.id === updateTodo.id);
      for (const key in updateTodo) todo[key] = updateTodo[key];
      if (todo.status === "undone") todo.status = "done";
      else todo.status = "undone";
    } catch (error) {
      console.log(error);
    }
    // if (todo.status === "undone") todo.status = "done";
    // else todo.status = "undone";
  };

  todosAdd = async (addedTodo) => {
    try {
      const response = await axios.post(
        "http://localhost:8001/todos",
        addedTodo
      );
      this.todos.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteTodo = async (todoId) => {
    try {
      await axios.delete(`http://localhost:8001/todos/${todoId}`);
      const todoDeleted = this.todos.filter((todo) => todo.id !== todoId);
      this.todos = todoDeleted;
    } catch (error) {
      console.error(error);
    }
  };
}
const todoStore = new TodoStore();
todoStore.fetchTodos();

export default todoStore;
