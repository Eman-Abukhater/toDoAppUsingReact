import React, { useState } from "react";
import TodoItem from "./TodoItem";
function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");


};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Add a task"
          value={todo}
        />
        <button type="submit">Add Task</button>
      </form>
      {todos.map((item) => (
        <div>
            <TodoItem key={item} item={item} />
        </div>
      ))}
    </div>
  );
}

export default Todo;
