import React, { useState, useEffect, SetStateAction } from 'react'

import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import ToDoList from '../todo-list/todo-list'
import ItemStatusFilter from '../item-status-filter/item-status-filter'
import AddItemForm from '../add-item-form/add-item-form'

import './app.css'

let maxId: number = 100

const createToDoItem = (label: string) => {
  return {
    label,
    important: false,
    done: false,
    id: maxId++,
  }
}

const App = () => {
  const initialTodos = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos') || '[]')
    : [
        createToDoItem('Drink some tea'),
        createToDoItem('Build React app'),
        createToDoItem('Read a book'),
        createToDoItem('Learn 10 new words in German'),
        createToDoItem('Call your grandparents'),
      ]
  const [toDoData, setToDoData] = useState(initialTodos)
  const [term, setTerm] = useState('')
  const [filterType, setFilterType] = useState('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(toDoData))
  }, [toDoData])

  const updateToDoItem = (id: number, updatedToDoItem: void): void => {
    setToDoData((prevState: { done: boolean; id: number; important: boolean; label: string }[]) =>
      prevState.map((element) => (element.id === id ? updatedToDoItem : element))
    )
  }

  const deleteItem = (id: number): void => {
    setToDoData((prevState: { done: boolean; id: number; important: boolean; label: string }[]) =>
      prevState.filter((item) => item.id !== id)
    )
  }

  const addItem = (text: string): void => {
    const newItem = createToDoItem(text)

    setToDoData((prevState: Array<string>) => [...prevState, newItem])
  }

  const onSearchChange = (term: SetStateAction<string>): void => {
    setTerm(term)
  }

  const onFilterChange = (filter: SetStateAction<string>): void => {
    setFilterType(filter)
  }

  const search = (
    items: { done: boolean; id: number; important: boolean; label: string }[],
    term: string
  ) => {

    if (term.length === 0) return items
    return items.filter((item) => item.label.toLowerCase().includes(term.toLowerCase()))
  }

  const filter = (items: { done: boolean; id: number; important: boolean; label: string }[], type: string) => {
    switch (type) {
      case 'all':
        return items
      case 'active':
        return items.filter((item) => !item.done)
      case 'important':
        return items.filter((item) => item.important)
      default:
        return items
    }
  }

  const visibleItems = filter(search(toDoData, term), filterType)
  const activeAmount = filter(toDoData, 'active').length
  const doneAmount = toDoData.length - activeAmount

  return (
    <div className="todo-app">
      <AppHeader toDo={activeAmount} done={doneAmount} />
      <div className="top-panel d-flex">
        <SearchPanel onSearchChange={onSearchChange} />
        <ItemStatusFilter filter={filterType} onFilterChange={onFilterChange} />
      </div>
      <ToDoList todos={visibleItems} onDeleted={deleteItem} updateToDoItem={updateToDoItem} />
      <div className="top-panel d-flex">
        <AddItemForm onItemAdded={addItem} />
      </div>
    </div>
  )
}

export default App
