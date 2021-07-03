import { useState } from "react";
import React from "react";
import todoStore from "./stores/todoStore";
const Form = () => {
  const [newTodo, setNewTodo] = useState({
    id: "",
    status: "undone",
    name: "",
    done: false,
  });

  const handleChange = (event) => {
    setNewTodo({ ...newTodo, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    todoStore.addTodo(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Enter a task..."
          onChange={handleChange}
          name="name"
          aria-label="task name"
          aria-describedby="button-addon2"
        />

        <button
          class="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          Add Task
        </button>
      </div>
      <div className="select">
        <select /*onChange={statusHandler}*/ name="todos">
          <option value="all">All</option>
          <option value="finished">Finished</option>
          <option value="unfinished">Not Finished</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
