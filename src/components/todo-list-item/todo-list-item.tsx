import React from 'react'

import './todo-list-item.css'
import clsx from 'clsx'

const ToDoListItem = ({
  id,
  label,
  onDeleted,
  important,
  done,
  updateToDoItem,
}: {
  id: number
  label: string
  onDeleted: any
  important: boolean
  done: boolean
  updateToDoItem: any
}) => {
  const onLabelClick = () => {
    updateToDoItem(id, { id, label, done, important: !important })
  }

  const onCheckClick = () => {
    updateToDoItem(id, { id, label, important, done: !done })
  }

  const style = {
    color: important ? 'orange' : 'black',
    fontWeight: important ? 'bold' : 'normal', 
  } as React.CSSProperties

 
  return (
    <span className={clsx('todo-list-item', { done })}>
      <span className="todo-list-item-label" style={style} onClick={onLabelClick}>
        {label}
      </span>
      <button
        type="button"
        className={clsx('btn btn-outline-success btn-sm float-right', { active: done })}
        onClick={onCheckClick}>
        <i className="fa fa-check" />
      </button>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
  )
}

export default ToDoListItem
