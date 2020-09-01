import React from 'react'
import clsx from 'clsx'

import './item-status-filter.css'

const ItemStatusFilter = ({ filter, onFilterChange }) => {
  const buttonsAll = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'important', label: 'Important' },
  ]

  const buttons = buttonsAll.map(({ name, label }) => {
    const isActive = filter === name

    return (
      <button
        type="button"
        className={clsx('btn', isActive ? 'btn-warning' : 'btn-outline-warning')}
        key={name}
        onClick={() => onFilterChange(name)}
      >
        {label}
      </button>
    )
  })

  return <div className="btn-group">{buttons}</div>
}

export default ItemStatusFilter
