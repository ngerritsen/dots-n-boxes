import { MAKE_MOVE } from '../constants/action-types'

const initialState = {
  width: 4,
  height: 4,
  moves: []
}

export default function gameReducer (state = initialState, action) {
  switch (action.type) {
    case MAKE_MOVE: {
      return {
        ...state,
        moves: [
          ...state.moves,
          action.move
        ]
      }
    }
    default: {
      return state
    }
  }
}
