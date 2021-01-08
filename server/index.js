require = require('esm')(module/* , options */)
require('dotenv').config()
require('./discord.js')
module.exports = require('./serverMain.js')
