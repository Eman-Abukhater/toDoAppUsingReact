import React, { useState } from "react";

function Form( {todos, setTodos}) {
    const [todo, setTodo] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Add a task"
        value={todo}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default Form;
