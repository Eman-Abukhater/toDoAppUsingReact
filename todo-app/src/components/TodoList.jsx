import React from 'react'
import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

function TodoList({todos}) {
  return (
    <div className={styles.list}>
        {todos.map((item) => (
        <div>
          <TodoItem key={item} item={item} />
        </div>
      ))}
    </div>
  )
}

export default TodoList