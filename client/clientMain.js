
import GameClient from './GameClient';

window.onload = function () {
    console.log('window loaded')

    const secret = document.getElementById("secret_input").nodeValue
    const gameClient = new GameClient(secret)
    let tick = 0
    let previous = performance.now()
    const loop = function () {
        window.requestAnimationFrame(loop)
        const now = performance.now()
        const delta = (now - previous) / 1000
        previous = now
        tick++

        gameClient.update(delta, tick, now)
    }

    loop()
}