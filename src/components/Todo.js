import React from "react";
import { observer } from "mobx-react";
import todoStore from "./stores/todoStore";
import { ButtonStyl } from "../styles";
const Todo = (props) => {
  const handleDelete = () => {
    todoStore.deleteTodo(props.todo);
  };

  const handleFinish = () => {
    todoStore.todoFinished(props.todo);
  };
  /* new function to handle the handleClick todoStore.todosDelete(props.todo); */
  return (
    <div>
      <li
        className={`${
          props.todo.status === "done"
            ? "completed"
            : "list-group-item list-group-item-primary"
        }`}
      >
        {props.todo.name}
        {" - " + props.todo.status}
      </li>
      {/* onClick = {handleClick} */}
      {/* (props.todo.status === "undone")? "finished" :"unfinished" */}
      <button
        type="button"
        class="btn btn-outline-success"
        onClick={handleFinish}
      >
        {props.todo.status === "undone" ? "Pending Task" : "Finished Task"}
      </button>
      <button
        type="button"
        class="btn btn-outline-danger"
        onClick={handleDelete}
      >
        delete
      </button>
    </div>
  );
};
export default observer(Todo);
