import React, { useState } from "react";
import styles from "./form.module.css";
function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };
  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Add a task"
          value={todo}
        />
        <button className={styles.modernButton} type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default Form;
