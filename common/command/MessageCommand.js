import nengi from 'nengi'

class MessageCommand {
    constructor(msg) {
        this.msg = msg
    }
}

MessageCommand.protocol = {
    msg: nengi.String,
}

export default MessageCommand
