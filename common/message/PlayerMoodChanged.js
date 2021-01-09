import nengi from 'nengi'

class PlayerMoodChanged {
    constructor(moodString) {
        this.moodString = moodString
    }
}

PlayerMoodChanged.protocol = {
    moodString: nengi.String,
}

export default PlayerMoodChanged
