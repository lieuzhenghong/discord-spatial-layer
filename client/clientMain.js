import UI from './runClient';

window.onload = function () {
    const container = document.getElementById('container')
    container.style.height = '100%'
    container.style.width = '100%'
    container.style.position = 'absolute'

    const ui = new UI(container);
    ui.start();
}
