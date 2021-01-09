class InputSystem {
    constructor() {
        this.canvasEle = document.getElementById('main-canvas')
        this.onmousemove = null

        this.currentState = {
            w: false,
            s: false,
            a: false,
            d: false,
            r: false,
            mx: 0,
            my: 0,
            mouseDown: false,
            f1: false,
            f2: false,
            f3: false,
            f4: false,
            f5: false,
        }

        this.frameState = {
            w: false,
            s: false,
            a: false,
            d: false,
            r: false,
            mouseDown: false,
            f1: false,
            f2: false,
            f3: false,
            f4: false,
            f5: false,
        }

        // disable right click
        this.listen('contextmenu', event => {
            event.preventDefault()
        })

        this.listen('keydown', event => {
            // console.log('keydown', event)
            // w or up arrow
            if (event.keyCode === 87 || event.keyCode === 38) {
                this.currentState.w = true
                this.frameState.w = true
            }
            // a or left arrow
            if (event.keyCode === 65 || event.keyCode === 37) {
                this.currentState.a = true
                this.frameState.a = true
            }
            // s or down arrow
            if (event.keyCode === 83 || event.keyCode === 40) {
                this.currentState.s = true
                this.frameState.s = true
            }
            // d or right arrow
            if (event.keyCode === 68 || event.keyCode === 39) {
                this.currentState.d = true
                this.frameState.d = true
            }
            // F1
            if (event.keyCode === 49) {
                this.currentState.f1 = true
                this.frameState.f1 = true
            }
            // F2
            if (event.keyCode === 50) {
                this.currentState.f2 = true
                this.frameState.f2 = true
            }
            // F3
            if (event.keyCode === 51) {
                this.currentState.f3 = true
                this.frameState.f3 = true
            }
            // F4
            if (event.keyCode === 52) {
                this.currentState.f4 = true
                this.frameState.f4 = true
            }
            // F5
            if (event.keyCode === 53) {
                this.currentState.f5 = true
                this.frameState.f5 = true
            }
        })

        this.listen('keyup', event => {
            // console.log('keyup', event)
            if (event.keyCode === 87 || event.keyCode === 38) {
                this.currentState.w = false
            }
            if (event.keyCode === 65 || event.keyCode === 37) {
                this.currentState.a = false
            }
            if (event.keyCode === 83 || event.keyCode === 40) {
                this.currentState.s = false
            }
            if (event.keyCode === 68 || event.keyCode === 39) {
                this.currentState.d = false
            }
            if (event.keyCode === 49) {
                this.currentState.f1 = false
            }
            if (event.keyCode === 50) {
                this.currentState.f2 = false
            }
            if (event.keyCode === 51) {
                this.currentState.f3 = false
            }
            if (event.keyCode === 52) {
                this.currentState.f4 = false
            }
            if (event.keyCode === 53) {
                this.currentState.f5 = false
            }
        })

        this.listen('mousemove', event => {
            this.currentState.mx = event.clientX
            this.currentState.my = event.clientY
            if (this.onmousemove) {
                this.onmousemove(event)
            }
        })

        this.listen('pointerdown', event => {
            this.currentState.mouseDown = true
            this.frameState.mouseDown = true
        })

        this.listen('mouseup', event => {
            this.currentState.mouseDown = false
        })
    }

    listen(event, callback) {
        document.addEventListener(event, event => {
            const id = event.target.getAttribute('id')
            if (id !== 'main-canvas') {
                return event
            }

            callback(event)
        })
    }

    releaseKeys() {
        this.frameState.w = this.currentState.w
        this.frameState.a = this.currentState.a
        this.frameState.s = this.currentState.s
        this.frameState.d = this.currentState.d
        this.frameState.r = this.currentState.r
        this.frameState.f1 = this.currentState.f1
        this.frameState.f2 = this.currentState.f2
        this.frameState.f3 = this.currentState.f3
        this.frameState.f4 = this.currentState.f4
        this.frameState.f5 = this.currentState.f5
        this.frameState.mouseDown = this.currentState.mouseDown
    }
}

export default InputSystem
