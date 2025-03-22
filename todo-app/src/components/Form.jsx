import React, { useState } from "react";
import styles from "./form.module.css";
function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ task: "", done: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ task: "", done: false });
  };
  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo( {task: e.target.value, done: false })}
          type="text"
          placeholder="Add a task"
          value={todo.task}
        />
        <button className={styles.modernButton} type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default Form;
