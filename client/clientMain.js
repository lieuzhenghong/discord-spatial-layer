import GameClient from './GameClient'

window.onload = function () {
    console.log('window loaded')

    // TODO: const secret = document.getElementById('secret-input').value
    const secret = 'MAGIC_VALUE'
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
