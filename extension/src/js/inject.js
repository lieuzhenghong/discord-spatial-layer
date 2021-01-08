import UI from '../../../client/runClient'

let container;

(function () {
    const discordElement = document.getElementById('app-mount')

    const body = discordElement.parentElement

    discordElement.style.height = '60%'
    discordElement.style.float = 'top'

    container = document.createElement('div')
    container.id = 'game-container'
    container.style.height = '40%'
    container.style.width = '100%'
    container.style.position = 'absolute'
    container.style.top = '60%'
    container.style.backgroundColor = 'white'

    const ui = new UI(container);
    ui.start();

    body.appendChild(container)

}())
