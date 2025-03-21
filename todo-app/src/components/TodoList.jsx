import React from 'react'
import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

function TodoList({todos, setTodos}) {
  return (
    <div className={styles.list}>
        {todos.map((item) => (
        <div>
          <TodoItem key={item} item={item} todos={todos} setTodos={setTodos} />
        </div>
      ))}
    </div>
  )
}

export default TodoList