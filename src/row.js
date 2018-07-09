import React from 'react'
import PropTypes from 'prop-types'
import { map, addIndex } from 'ramda'

import Cell from './cell'

const mapIndex = addIndex(map)

const Row = ({ cells, toggle, row }) => (
  <div className="row">
    {mapIndex(
      (cell, col) => <Cell row={row} col={col} toggle={toggle} value={cell} />,
      cells
    )}
  </div>
)

Row.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.number).isRequired,
  toggle: PropTypes.func.isRequired,
  row: PropTypes.number.isRequired
}

export default Row
