import * as PIXI from 'pixi.js'

class PlayerCharacter extends PIXI.Container {
    constructor(entity) {
        super()
        this.x = entity.x
        this.y = entity.y
        this.isAlive = entity.isAlive

        this.rotation = 0 //entity.rotation

        this.body = new PIXI.Graphics()
        this.body.beginFill(0xffffff)
        this.body.drawCircle(0, 0, 25)
        this.body.endFill()

        this.body.tint = 0xff0000

        this.nose = new PIXI.Graphics()
        this.nose.beginFill(0xff99999)
        this.nose.moveTo(0, -25)
        this.nose.lineTo(40, 0)
        this.nose.lineTo(0, 25)
        this.nose.endFill()

        this.addChild(this.nose)
        this.addChild(this.body)
        // this.addChild(this.hitpointBar)

        let name = "weineng"

        let playerNameText = new PIXI.Text(name,{fontFamily : 'Arial', fontSize: 15, fill : 0xffffff, align : 'center'});
        this.playerNameText = playerNameText
        this.playerNameText.y = 25
        this.playerNameText.x = -20
        this.addChild(this.playerNameText)
    }

    update(delta) {
        this.rotation = 0
        if (!this.isAlive) {
            this.nose.alpha = 0
        } else {
            this.nose.alpha = 1
        }
    }
}

export default PlayerCharacter