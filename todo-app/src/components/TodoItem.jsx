import React from "react";
import styles from "./todoitem.module.css";
function TodoItem({ item, todos, setTodos}) {
  function handleDelete() {
    setTodos(todos.filter((todo) => todo!== item));
    console.log (item);
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
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
