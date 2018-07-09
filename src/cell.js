import React from 'react'
import PropTypes from 'prop-types'

const Cell = ({ value, row, col, toggle }) => {
  if (value === 1) {
    return <div className="cell on" onClick={() => toggle(row, col)} />
  }
  return <div className="cell" onClick={() => toggle(row, col)} />
}

Cell.propTypes = {
  value: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  toggle: PropTypes.func.isRequired
}

export default Cell
