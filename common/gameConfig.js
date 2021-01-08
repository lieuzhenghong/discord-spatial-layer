const config = {
    UPDATE_RATE: 20,

    MAP_X: 8000,
    MAP_Y: 8000,

    PLAYER_SPEED: 1200,
    PLAYER_CHAT_TIMEOUT: 5000, // 5s

    MAP_IMAGE: 'https://raw.githubusercontent.com/juxd/discord-spatial-layer/master/public/images/bg.png',

    NEUTRAL_FACE: './images/tile000.png',
    HAPPY_FACE: './images/tile002.png',
    KISSY_FACE: './images/tile020.png',
    CRYING_FACE: './images/tile079.png',
    ANGRY_FACE: './images/tile089.png',

    // Use this to randomly get a face from tile{number}.png
    EMOJI_TILE_MIN: 0,
    EMOJI_TILE_MAX: 135,
    PLAYER_DIAMETER: 50,
}

export default config
