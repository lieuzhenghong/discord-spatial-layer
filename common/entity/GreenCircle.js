import nengi from 'nengi'
import SAT from 'sat'

class GreenCircle {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.isAlive = true
        this.collider = new SAT.Circle(new SAT.Vector(this.x, this.y), 25)
    }
}

GreenCircle.protocol = {
    x: { type: nengi.Float32, interp: false },
    y: { type: nengi.Float32, interp: false },
}

export default GreenCircle
