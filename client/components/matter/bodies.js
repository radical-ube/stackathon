import Matter from 'matter-js'
const {Bodies} = Matter

export function Box(x, y, w, h, options) {
  this.body = Bodies.rectangle(x, y, w, h, options)
}
