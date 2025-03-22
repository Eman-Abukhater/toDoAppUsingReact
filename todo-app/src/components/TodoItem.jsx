import React from "react";
import styles from "./todoitem.module.css";
function TodoItem({ item, todos, setTodos }) {
  function handleDelete() {
    setTodos(todos.filter((todo) => todo !== item));
    console.log(item);
  }

  function handleClick(task) {
    const newArray = todos.map((todo) =>
      todo.task === task ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }

  const doneStyle = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={doneStyle} onClick={() => handleClick(item.task)}>
          {item.task}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deletButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}

export default TodoItem;
