import nengi from 'nengi'
import SAT from 'sat'
import WeaponSystem from '../WeaponSystem'

class PlayerCharacter {
    constructor({ name }) {
        this.x = 0
        this.y = 0
        this.isAlive = true

        this.moveDirection = {
            x: 0,
            y: 0,
        }

        this.speed = 400

        this.name = name

        this.rotation = 0

        this.weaponSystem = new WeaponSystem()

        this.collider = new SAT.Circle(new SAT.Vector(this.x, this.y), 25)
    }

    fire() {
        if (!this.isAlive) {
            return false
        }

        return this.weaponSystem.fire()
    }

    processChatMessage(command) {
        this.message = command.msg
        setTimeout(() => {
            this.message = ''
        }, 5000)
    }

    processMove(command) {
        if (!this.isAlive) {
            return
        }

        this.rotation = command.rotation

        let unitX = 0
        let unitY = 0

        // create forces from input
        if (command.forward) {
            unitY -= 1
        }
        if (command.backward) {
            unitY += 1
        }

        if (command.left) {
            unitX -= 1
        }

        if (command.right) {
            unitX += 1
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
    isAlive: nengi.Boolean,
    hitpoints: nengi.UInt8,
    name: nengi.String,
    message: nengi.String,
}

export default PlayerCharacter
