import React from 'react'
import PropTypes from 'prop-types'
import gol from 'gol-functional'
import { map, addIndex } from 'ramda'
import Row from './row'

const mapIndex = addIndex(map)

const App = ({ state, setState }) => {
  const startGame = () => {
    const sim = gol(
      {
        size: 40,
        speed: 1000,
        generate: true
      },
      board => {
        setState({ board })
      }
    )

    setState({ sim })
    sim.start()
  }
  const stopGame = () => {
    state.sim.stop()
  }
  return (
    <div>
      <h1>Game of Life</h1>
      <div className="board">
        {mapIndex(
          (cells, row) => (
            <Row cells={cells} row={row} toggle={state.sim.toggle} />
          ),
          state.board
        )}
      </div>
      <button type="button" onClick={startGame}>
        Start Game
      </button>
      <button type="button" onClick={stopGame}>
        Stop Game
      </button>
    </div>
  )
}

App.propTypes = {
  state: PropTypes.shape({
    board: PropTypes.array.isRequired
  }),
  setState: PropTypes.func.isRequired
}

App.defaultProps = {
  state: {
    board: []
  }
}

export default App
