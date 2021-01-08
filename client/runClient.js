import GameClient from './GameClient'
import instantiateClient from './instantiateClient'

export default function runClient(container) {
    container.innerText = '';
    container.insertAdjacentHTML('beforeend', renderSecretKeyForm())
}

const SECRET_KEY_FORM_ID = 'secret-key-form'

function renderSecretKeyForm() {
    return `
    <form id="${SECRET_KEY_FORM_ID}">
      <label for="secret-key">Secret Key:</label><br>
      <input type="text" id="secret-key" name="secret-key"><br>
      <input type="submit" value="Submit">
    </form>
  `
}

function handleSecretKeyFormSubmit(e) {
    const secretKey = document.getElementById('secret-key').value;
    console.log(secretKey);

    instantiateClient(secretKey)
        .then(client => {
            console.log("success");
            const canvas = '<canvas id=\'main-canvas\' style="height: 100%; width: 100%"></canvas>'
            container.innerText = ''
            container.insertAdjacentHTML('beforeend', canvas)
            const gameClient = new GameClient(client)
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
        })
        .catch(err => {
            console.log(`error: ${err}`);
            alert('shit secret key')
        })
}


document.addEventListener('submit', e => {
    e.preventDefault()

    const form = e.target
    const formId = form.getAttribute('id')

    if (formId === SECRET_KEY_FORM_ID) {
        handleSecretKeyFormSubmit(e)
    }
}, false)