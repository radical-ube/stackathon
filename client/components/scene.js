import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

import Matter from 'matter-js'
import {boxConstructor} from './matter/box'
import {boundaryConstructor} from './matter/boundary'

import {
  getRedColor,
  getOrangeColor,
  getYellowColor,
  getGreenColor,
  getBlueColor,
  getPurpleColor
} from './sketches/colors'

const {Engine, World} = Matter
const engine = Engine.create()
const world = engine.world

let width = window.innerWidth
let height = window.innerHeight * 0.8

const Scene = props => {
  const [myRef, setMyRef] = useState(React.createRef())
  const [getColor, setGetColor] = useState({})

  const Sketch = p5 => {
    // constructors
    const Box = boxConstructor(p5)
    const Boundary = boundaryConstructor(p5)

    // bodies
    const boxes = []
    let ground = new Boundary(width / 2, height + 50, width, 10)
    let wall1 = new Boundary(width / width - 21, height / 2, 5, height)
    let wall2 = new Boundary(width / 6 + 20, height / 2, 5, height)

    p5.mouseDragged = () => {
      if (p5.mouseX < width / 6 + 20 && p5.mouseX > width / width - 21) {
        // console.log(this.state.getColor)
        // const color = this.state.getColor()

        const box = new Box(
          p5.mouseX,
          p5.mouseY,
          p5.random(8, 20),
          p5.random(10, 50)
          // color
        )
        World.add(world, box.body)
        boxes.push(box)
        // console.log('world', world)
      }
    }

    // render
    p5.setup = () => {
      p5.createCanvas(width, height)
      Engine.run(engine)

      World.add(world, [ground.body, wall1.body, wall2.body])
    }
    p5.draw = () => {
      p5.background(50, 50, 50, 150)
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].show()
        if (boxes[i].isOffScreen()) {
          World.remove(world, boxes[i].body)
          boxes.splice(i, 1)
          i--
        }
      }
    }
    p5.windowResized = () => {
      width = window.innerWidth
      height = window.innerHeight / 2
      p5.resizeCanvas(width, height)
      ground.w = width
      ground.x = width / 2
      World.clear(world, false)
    }
  }

  useEffect(() => {
    const myP5 = new p5(Sketch, myRef.current)
    console.log('color', props.color)
    console.log('getColor', getColor)
    console.log('getRed', getRedColor)
  }, [])

  return <div ref={myRef} />
}

export default connect(null)(Scene)

// if (this.props.color === 'red') {
//   this.setState({getColor: getRedColor})
// }
// else if (this.props.color === 'orange') {
//   this.setState({getColor: getOrangeColor})
// }
// else if (this.props.color === 'yellow') {
//   this.setState({getColor: getYellowColor})
// }
// else if (this.props.color === 'green') {
//   this.setState({getColor: getGreenColor})
// }
// else if (this.props.color === 'blue') {
//   this.setState({getColor: getBlueColor})
// }
// else if (this.props.color === 'purple') {
//   this.setState({getColor: getPurpleColor})
// }
// console.log(this.state.getColor)
// // console.log('in componentDidMount', this.props.color)
