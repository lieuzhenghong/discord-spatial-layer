import nengi from 'nengi'

import PlayerCharacter from './entity/PlayerCharacter'
import Identity from './message/Identity'
import DiscordMessageReceived from './message/DiscordMessageReceived'
import WeaponFired from './message/WeaponFired'
import MoveCommand from './command/MoveCommand'
import FireCommand from './command/FireCommand'

const config = {
    UPDATE_RATE: 20,

    ID_BINARY_TYPE: nengi.UInt16,
    TYPE_BINARY_TYPE: nengi.UInt8,

    ID_PROPERTY_NAME: 'nid',
    TYPE_PROPERTY_NAME: 'ntype',

    USE_HISTORIAN: false,
    HISTORIAN_TICKS: 0,
    MAP_X: 8000,
    MAP_Y: 8000,

    PLAYER_SPEED: 1200,
    PLAYER_CHAT_TIMEOUT: 5000, // 5s

    MAP_IMAGE: './images/bg.png',

    protocols: {
        entities: [
            ['PlayerCharacter', PlayerCharacter],
        ],

        localMessages: [],
        messages: [
            ['Identity', Identity],
            ['WeaponFired', WeaponFired],
            ['DiscordMessageReceived', DiscordMessageReceived],
        ],
        commands: [
            ['MoveCommand', MoveCommand],
            ['FireCommand', FireCommand],
        ],
        basics: [],
    },
}

export default config
