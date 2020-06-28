import Matter from 'matter-js'
const {Bodies} = Matter

export const boxConstructor = p5 => {
  return function Box(x, y, w, h, color) {
    const options = {
      friction: 0.4,
      restitution: 0.8
    }
    this.body = Bodies.rectangle(x, y, w, h, options)
    this.w = w
    this.h = h
    this.hue = color.hue
    this.saturation = color.saturation
    this.lightness = color.lightness
    this.alpha = color.alpha

    this.show = function() {
      let pos = this.body.position
      let angle = this.body.angle

      p5.push()
      p5.translate(pos.x, pos.y)
      p5.rotate(angle)
      p5.rectMode(p5.CENTER)
      p5.colorMode(p5.HSL)
      p5.fill(this.hue, this.saturation, this.lightness, this.alpha)
      p5.strokeWeight(1)
      p5.stroke(this.hue, 100, 65, 100)
      p5.rect(0, 0, this.w, this.h)
      p5.pop()
    }
  }
}
