import React from 'react'
import './app-header.css'

const AppHeader = ({ toDo, done }: {toDo: number, done: number}) => {
  return (
    <div className="app-header d-flex">
      <h1>ToDo List</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </div>
  )
}

export default AppHeader
