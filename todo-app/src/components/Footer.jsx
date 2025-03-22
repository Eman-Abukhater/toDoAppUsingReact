import React from 'react'
import styles from  "./footer.module.css"
function Footer({completed, totalTodos}) {
  return (
    <div className={styles.footer}> 
        <span className={styles.item} >
            Completed Tasks: {completed} 

        </span>
        <span className={styles.item}>
            Total Tasks: {totalTodos} 

        </span>


    </div>
  )
}

export default Footer