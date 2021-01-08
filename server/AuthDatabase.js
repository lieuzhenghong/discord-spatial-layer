import { runTests, expectEqual } from '../common/testing'

const adjs = [
    'attractive',
    'bald',
    'beautiful',
    'chubby',
    'clean',
    'dazzling',
    'drab',
    'elegant',
    'fancy',
    'fit',
    'flabby',
    'glamorous',
    'gorgeous',
    'handsome',
    'long',
    'magnificent',
    'muscular',
    'plain',
    'plump',
    'quaint',
    'scruffy',
    'shapely',
    'short',
    'skinny',
    'stocky',
    'ugly',
    'unkempt',
    'unsightly',
]

const nouns = [
    'alarm',
    'animal',
    'aunt',
    'bait',
    'balloon',
    'bath',
    'bead',
    'beam',
    'bean',
    'bedroom',
    'boot',
    'bread',
    'brick',
    'brother',
    'camp',
    'chicken',
    'children',
    'crook',
    'deer',
    'dock',
    'doctor',
    'downtown',
    'drum',
    'dust',
    'eye',
    'family',
    'father',
    'fight',
    'flesh',
    'food',
    'frog',
    'goose',
    'grade',
    'grandfather',
    'grandmother',
    'grape',
    'grass',
    'hook',
    'horse',
    'jail',
    'jam',
    'kiss',
    'kitten',
    'light',
    'loaf',
    'lock',
    'lunch',
    'lunchroom',
    'meal',
    'mother',
    'notebook',
    'owl',
    'pail',
    'parent',
    'park',
    'plot',
    'rabbit',
    'rake',
    'robin',
    'sack',
    'sail',
    'scale',
    'sea',
    'sister',
    'soap',
    'song',
    'spark',
    'space',
    'spoon',
    'spot',
    'spy',
    'summer',
    'tiger',
    'toad',
    'town',
    'trail',
    'tramp',
    'tray',
    'trick',
    'trip',
    'uncle',
    'vase',
    'winter',
    'water',
    'week',
    'wheel',
    'wish',
    'wool',
    'yard',
    'zebra',
]

// Returns `adj-adj-noun`
const randCode = () => {
    const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))
    const randAdj = () => adjs[getRandomInt(adjs.length)]
    const randNoun = () => nouns[getRandomInt(nouns.length)]
    return [randAdj(), randAdj(), randNoun()].join('-')
}

class AuthDatabase {
    constructor() {
        this.registered = new Map()
    }

    // Returns the code which the user is added to AuthDatabase with
    addUser(user) {
        let code = randCode()
        while (this.registered.has(code)) code = randCode()
        this.registered.set(code, { user, game_status: null })
        return code
    }

    // Returns the user with the code, or null if the code isn't used.
    getUser(code) {
        return this.registered.get(code)
    }
}

runTests({
    setup: () => {
        const db = new AuthDatabase()

        const dummyUser = 'joe'

        return { dummyUser, dummyCode: db.addUser(dummyUser), db }
    },
    tests: [ctx => {
        console.log('-- running tests in authDatabase --')
        expectEqual(ctx.db.getUser(ctx.dummyCode).user, ctx.dummyUser)
        expectEqual(ctx.db.getUser('non-existent-guy'), undefined)
    },
    ],
})

export default AuthDatabase
