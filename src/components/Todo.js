import React from "react";
import { observer } from "mobx-react";
import todoStore from "./stores/todoStore";

const Todo = (props) => {
  const handleDelete = () => {
    todoStore.todosDelete(props.todo);
  };

  return (
    <div>
      <li className={`${props.todo.done ? "completed" : ""}`}>
        {props.todo.name}
      </li>
      <button>finished</button>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};
export default observer(Todo);
