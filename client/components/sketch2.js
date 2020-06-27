import Matter from 'matter-js'
const {Engine, World, Bodies, Mouse, MouseConstraint} = Matter

const Sketch2 = sketch => {
  let engine
  let world
  // bodies
  let boxA = Bodies.rectangle(300, 100, 100, 80)
  let boxB = Bodies.rectangle(360, 40, 80, 100)
  let ground = Bodies.rectangle(300, 400, 810, 60, {isStatic: true})

  sketch.setup = () => {
    sketch.createCanvas(600, 400)
    engine = Engine.create()
    world = engine.world

    Engine.run(engine)
    World.add(world, [boxA, boxB, ground])
  }
  sketch.draw = () => {
    sketch.background(0)
    sketch.fill(255)
    sketch.rect(boxA.position.x, boxA.position.y, 100, 80)
    sketch.rect(boxB.position.x, boxB.position.y, 80, 100)
  }
}

export default Sketch2
