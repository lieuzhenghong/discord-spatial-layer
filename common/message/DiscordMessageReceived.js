import nengi from 'nengi'

class DiscordMessageReceived {
    constructor(message) {
        this.message = message
    }
}

DiscordMessageReceived.protocol = {
    message: nengi.String,
}

export default DiscordMessageReceived
