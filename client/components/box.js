import Matter from 'matter-js'
const {Bodies, World} = Matter

export default function(p) {
  class Box {
    constructor(x, y, w, h) {
      this.body = Bodies.rectangle(x, y, w, h)
      this.w = w
      this.h = h
    }

    // World.add(world, this.body)
    show() {
      let pos = this.body.position
      let angle = this.body.angle

      push()
      translate(pos.x, pos.y)
      rect(0, 0, this.w, this.h)
      pop()
    }
  }
}
