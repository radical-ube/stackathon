const GET_BOXES = 'GET_BOXES'
const ADD_BOXES = 'ADD_BOXES'
const REMOVE_BOXES = 'REMOVE_BOXES'

const boxes = []

export const getBoxes = boxes => ({
  type: GET_BOXES,
  boxes
})

export const addBoxes = box => ({
  type: ADD_BOXES,
  box
})

export const removeBoxes = index => ({
  type: REMOVE_BOXES,
  index
})

export default function(state = boxes, action) {
  switch (action.type) {
    case ADD_BOXES:
      return [...state, action.box]
    case REMOVE_BOXES:
      return [...state].splice(i, 1)
    default:
      return state
  }
}
