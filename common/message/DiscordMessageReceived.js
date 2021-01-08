import nengi from 'nengi'

class DiscordMessageReceived {
    constructor(discordMessage) {
        this.messageId = discordMessage.id
        this.content = discordMessage.content
        this.authorId = discordMessage.author.id
        this.authorUsername = discordMessage.author.username
        this.authorDiscriminator = discordMessage.author.discriminator
    }
}

DiscordMessageReceived.protocol = {
    messageId: nengi.String,
    content: nengi.String,
    authorId: nengi.String,
    authorUsername: nengi.String,
    authorDiscriminator: nengi.String,
}

export default DiscordMessageReceived
