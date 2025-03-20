import React from 'react'
import TodoItem from "./TodoItem";


function TodoList({todos}) {
  return (
    <div>
        {todos.map((item) => (
        <div>
          <TodoItem key={item} item={item} />
        </div>
      ))}
    </div>
  )
}

export default TodoList