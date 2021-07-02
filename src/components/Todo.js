import React from "react";
import { observer } from "mobx-react";
import todoStore from "./stores/todoStore";

const Todo = (props) => {
  const handleDelete = () => {
    todoStore.deleteTodo(props.todo);
  };

  return (
    <div>
      <li>
        {props.todo.name}
        {" - " + props.todo.status}
      </li>
      <button>finished</button>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};
export default observer(Todo);
