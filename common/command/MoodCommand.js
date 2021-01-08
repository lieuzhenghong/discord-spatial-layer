import nengi from 'nengi'

class MoodCommand {
    constructor(mood) {
        this.mood = mood
    }
}

MoodCommand.protocol = {
    mood: nengi.String,
}

export default MoodCommand
