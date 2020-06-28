import axios from 'axios'

const GET_SCENE = 'GET_SCENE'

const getScene = scene => ({
  type: GET_SCENE,
  scene
})

// initial state
const scene = 'rainbow'

// reducer
export default function(state = scene, action) {
  switch (action.type) {
    case GET_SCENE:
      return action.scene
    default:
      return state
  }
}
