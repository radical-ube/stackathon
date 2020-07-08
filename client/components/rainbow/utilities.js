import Matter from 'matter-js'

const {World} = Matter

export const mouseInBounds = (settings, viewScreen) => {
  const {p5} = settings
  const {width, height} = viewScreen
  return (
    p5.mouseX < width && p5.mouseX > 0 && p5.mouseY < height && p5.mouseY > 0
  )
}

export const removeFromArray = (array, id) => {
  for (let i = 0; i < array.length; i++) {
    let curItem = array[i]
    if (curItem.id === id) {
      array.splice(i, 1)
      break
    }
  }
}

// export const removeOnCollision = (event, world, array) => {
//   const pairs = event.pairs
//   for (let i = 0; i < pairs.length; i++) {
//     const bodyA = pairs[i].bodyA
//     const bodyB = pairs[i].bodyB
//     const id = bodyB.id
//     if (bodyA.label === 'ground' && bodyB.label === 'color box') {
//       World.remove(world, bodyB)
//       removeFromArray(array, id)
//     }
//     if (bodyA.label === 'ceiling' && bodyB.label === 'color box') {
//       World.remove(world, bodyB)
//       removeFromArray(array, id)
//     }
//   }
// }
