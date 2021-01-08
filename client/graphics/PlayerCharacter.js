import * as PIXI from 'pixi.js'
import CONFIG from '../../common/gameConfig'

class PlayerAvatar extends PIXI.Container {
    constructor(skin_rgb) {
        super()

        this.body = new PIXI.Graphics()
        this.body.beginFill(0xffffff)
        this.body.drawCircle(0, 0, 25)
        this.body.endFill()
        this.body.tint = skin_rgb

        this.hat = new PIXI.Graphics()
        // this.hat.beginFill('0x'+Math.random().toString(16).substr(2,6))
        this.hat.moveTo(0, -25)
        this.hat.lineTo(70, 0)
        this.hat.lineTo(0, 25)
        this.hat.endFill()

        // To point the hat to the top.

        this.addChild(this.hat)
        this.addChild(this.body)
    }
}

class PlayerCharacter extends PIXI.Container {
    constructor(entity) {
        super()
        this.x = entity.x
        this.y = entity.y
        this.mood = entity.mood
        console.log("mood:", this.mood)

        this.avatar = new PlayerAvatar(0xff0000)

        this.addChild(this.avatar)

        const { name } = entity

        const playerNameText = new PIXI.Text(name, {
            fontFamily: 'Arial',
            fontSize: 15,
            fill: 0xffffff,
            align: 'center',
            wordWrapWidth: 100,
            wordWrap: true,
        })
        this.playerNameText = playerNameText
        this.playerNameText.y = 25
        this.playerNameText.x = -25
        this.addChild(this.playerNameText)
    }

    showMessage(msg) {
        this.removeChild(this.messageBubble)

        const messageCanvas = new PIXI.Text(msg, {
            fontFamily: 'Arial',
            fontSize: 15,
            fill: 0xffffff,
            align: 'center',
            wordWrapWidth: 200,
            wordWrap: true,
            breakWords: true,
            fill: 0xffff00,
            leading: 0,
        })
        this.messageBubble = messageCanvas
        this.messageBubble.y = -50 - messageCanvas.height
        this.messageBubble.x = -messageCanvas.width / 2

        this.addChild(this.messageBubble)
        setTimeout(() => {
            this.removeChild(messageCanvas)
            messageCanvas.destroy({
                children: true,
                texture: true,
                baseTexture: true,
            })
        }, CONFIG.PLAYER_CHAT_TIMEOUT)
    }

    update(delta) {
        this.rotation = 0
    }
}

export default PlayerCharacter
