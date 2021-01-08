import GameClient from './GameClient'
import instantiateClient from './instantiateClient'

const SECRET_KEY_FORM_ID = 'secret-key-form'

class UI {
    constructor(container) {
        this.container = container;
    }

    start() {
        this.container.innerText = '';
        this.container.insertAdjacentHTML('beforeend', this.renderSecretKeyForm());
        document.addEventListener('submit', e => {
            e.preventDefault()
        
            const form = e.target
            const formId = form.getAttribute('id')
        
            if (formId === SECRET_KEY_FORM_ID) {
                this.handleSecretKeyFormSubmit(e)
            }
        }, false)
    }

    renderSecretKeyForm() {
        return `
        <form id="${SECRET_KEY_FORM_ID}">
          <label for="secret-key">Secret Key:</label><br>
          <input type="text" id="secret-key" name="secret-key"><br>
          <input type="submit" value="Submit">
        </form>
      `
    }

    handleSecretKeyFormSubmit(e) {
        const secretKey = document.getElementById('secret-key').value;
    
        instantiateClient(secretKey)
            .then(client => {
                console.log("success");
                const canvas = '<canvas id=\'main-canvas\' style="height: 100%; width: 100%"></canvas>'
                this.container.innerText = ''
                this.container.insertAdjacentHTML('beforeend', canvas)
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
}

export default UI;

