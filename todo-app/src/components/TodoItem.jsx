import React from "react";
import styles from "./todoitem.module.css";
function TodoItem({ item }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
        <span>
          <button className={styles.deletButton} >x</button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}

export default TodoItem;
