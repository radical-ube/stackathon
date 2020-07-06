import Matter from 'matter-js'
const {Bodies, World} = Matter

export const boundaryConstructor = settings => {
  return function Boundary(x, y, w, h) {
    const options = {
      friction: 0.3,
      restitution: 1,
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, w, h, options)
    this.w = w
    this.h = h
  }
}

export const addBoundaries = (settings, viewScreen) => {
  const {p5, world} = settings
  const {width, height} = viewScreen
  const Boundary = boundaryConstructor(settings)

  let ground = new Boundary(width / 2, height + 20, width, 10)
  let leftWall = new Boundary(width / width - 6, height / 2, 10, height)
  let rightWall = new Boundary(width + 5, height / 2, 10, height)
  let ceiling = new Boundary(width / 2, height / height - 21, width, 10)

  World.add(world, [ground.body, leftWall.body, rightWall.body, ceiling.body])
}
