'use strict'

const {DISCORD_BASE_URL} = process.env

const EndPoint = {
    GUILDS: DISCORD_BASE_URL + '/api/v9/guilds/'
}

module.exports = EndPoint