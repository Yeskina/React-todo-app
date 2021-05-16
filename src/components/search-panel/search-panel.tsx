import React, { SetStateAction } from 'react'

import './search-panel.css'

const SearchPanel = ({ onSearchChange }: { onSearchChange: (term: SetStateAction<string>) => void }) => {
  const onSearchChanged = (event: { target: { value: string } }): void => {
    onSearchChange(event.target.value)
  }

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      onChange={onSearchChanged}
    />
  )
}

export default SearchPanel
