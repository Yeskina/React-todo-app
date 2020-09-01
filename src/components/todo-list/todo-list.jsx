import React from 'react'

import ToDoListItem from '../todo-list-item/todo-list-item'
import './todo-list.css'

const ToDoList = ({ todos, onDeleted, updateToDoItem }) => {
  const elements = todos.map((item) => {
    const { ...itemProps } = item

    return (
      <li key={item.id} className="list-group-item">
        <ToDoListItem
          {...itemProps}
          updateToDoItem={updateToDoItem}
          onDeleted={() => onDeleted(item.id)}
        />
      </li>
    )
  })

  return <ul className="list-group todo-list">{elements}</ul>
}

export default ToDoList
