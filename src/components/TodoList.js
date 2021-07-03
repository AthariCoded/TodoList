import React from "react";
import todoStore from "./stores/todoStore";
import { observer } from "mobx-react";
import Todo from "./Todo";
import { ListView } from "../styles";
import todos from "../data";

const TodoList = () => {
  const todoList = todoStore.todos.map((todo) => <Todo todo={todo} />);
  console.log(todoList);
  return (
    <div>
      <ListView>{todoList}</ListView>
    </div>
  );
};
export default observer(TodoList);
