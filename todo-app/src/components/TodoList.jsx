import React from "react";
import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <div>
          <TodoItem key={item} item={item} todos={todos} setTodos={setTodos} />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
