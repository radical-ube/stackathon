import Matter from 'matter-js'
// import Box from './box'

const Sketch = sketch => {
  const {Engine, World, Bodies, Mouse, MouseConstraint} = Matter

  let engine
  let world
  // bodies
  let boxA = Bodies.rectangle(400, 200, 80, 80)
  // let boxA = new Box(400, 200, 80, 80)
  let boxB = Bodies.rectangle(440, 240, 80, 80)
  let ground = Bodies.rectangle(400, 380, 810, 60, {isStatic: true})

  sketch.setup = () => {
    sketch.createCanvas(800, 600)
    engine = Engine.create()
    world = engine.world

    Engine.run(engine)
    World.add(world, [boxA, boxB, ground])
    console.log(boxA)
    console.log(boxB)
  }
  sketch.draw = () => {
    sketch.background(0)
    sketch.fill(255)
    sketch.rect(boxA.position.x, boxA.position.y, 80, 80)
    boxA.show()
    sketch.rect(boxB.position.x, boxB.position.y, 80, 80)
  }
}

export default Sketch
