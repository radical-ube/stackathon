import Matter from 'matter-js'
const {Bodies, World} = Matter

export const boxConstructor = sketch => {
  return function Box(x, y, w, h) {
    this.body = Bodies.rectangle(x, y, w, h)
    this.w = w
    this.h = h

    this.show = function() {
      let pos = this.body.position
      let angle = this.body.angle

      sketch.push()
      sketch.translate(pos.x, pos.y)
      sketch.rect(0, 0, this.w, this.h)
      sketch.pop()
    }
  }
}
