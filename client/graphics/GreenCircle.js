import * as PIXI from 'pixi.js'

class GreenCircle extends PIXI.Container {
    constructor(entity) {
        super()
        this.x = entity.x
        this.y = entity.y
        this.isAlive = entity.isAlive // not really used...

        this.body = new PIXI.Graphics()
        this.body.beginFill(0xffffff)
        this.body.drawCircle(0, 0, 25)
        this.body.endFill()

        this.body.tint = 0x00ff00

        this.addChild(this.body)
    }

    update(delta) {

    }
}

export default GreenCircle