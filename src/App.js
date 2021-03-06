//import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { Wrapper } from "./styles";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Wrapper>
        <Form />
        <TodoList />
      </Wrapper>
    </div>
  );
}

export default App;
