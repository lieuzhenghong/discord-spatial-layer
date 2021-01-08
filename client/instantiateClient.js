import nengi from 'nengi'
import nengiConfig from '../common/nengiConfig'
import CONFIG from '../common/gameConfig'

function instantiateClient(secret) {
    return new Promise((resolve, reject) => {
        const client = new nengi.Client(nengiConfig)

        client.onConnect(res => {
            console.log('onConnect response:', res)
            if (!res.accepted) {
                reject(res)
            } else {
                resolve(client)
            }
        })

        client.connect(CONFIG.WEB_SOCKET, { secret })
    })
}

export default instantiateClient
