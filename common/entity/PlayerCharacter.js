import nengi from 'nengi'
import SAT from 'sat'
import WeaponSystem from '../WeaponSystem'
import CONFIG from '../nengiConfig'

class PlayerCharacter {
    constructor({ name }) {
        this.x = 0
        this.y = 0

        this.moveDirection = {
            x: 0,
            y: 0,
        }

        this.name = name

        this.rotation = 0
        this.speed = CONFIG.PLAYER_SPEED

        this.weaponSystem = new WeaponSystem()
        this.collider = new SAT.Circle(new SAT.Vector(this.x, this.y), 25)
    }

    fire() {
        return this.weaponSystem.fire()
    }

    processMove(command) {
        this.rotation = command.rotation

        let unitX = 0
        let unitY = 0

        // create forces from input
        if (command.forward) {
            unitY--
        }
        if (command.backward) {
            unitY++
        }

        if (command.left) {
            unitX--
        }

        if (command.right) {
            unitX++
        }

        // normalize
        const len = Math.sqrt(unitX * unitX + unitY * unitY)
        if (len > 0) {
            unitX /= len
            unitY /= len
        }

        this.moveDirection.x = unitX
        this.moveDirection.y = unitY
    }

    processMood(command) {
        // TODO implement this
        this.mood = command.mood
        console.log("Mood has been changed!")
    }

    move(delta) {
        this.x += this.moveDirection.x * this.speed * delta
        this.y += this.moveDirection.y * this.speed * delta

        this.collider.pos.x = this.x
        this.collider.pos.y = this.y
    }
}

PlayerCharacter.protocol = {
    x: { type: nengi.Float32, interp: true },
    y: { type: nengi.Float32, interp: true },
    hitpoints: nengi.UInt8,
    name: nengi.String,
    message: nengi.String,
    mood: nengi.String,
}

export default PlayerCharacter
