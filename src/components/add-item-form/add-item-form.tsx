import React, { useState } from 'react'

import './add-item-form.css'


const AddItemForm = ({ onItemAdded }: {onItemAdded: (text: string) => void}) => {
  const [label, setLabel] = useState('')

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    onItemAdded(label)
    setLabel('')
  }

  return (
    <form className="item-add-form d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        onChange={(event) => setLabel(event.target.value)}
        placeholder="What needs to be done?"
        value={label}
      />
      <button type="submit" className="btn btn-outline-secondary">
        Add
      </button>
    </form>
  )
}

export default AddItemForm
