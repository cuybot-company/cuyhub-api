'use strict'

const axios = require('axios')

const {DISCORD_BASE_URL, TOKEN_BOT} = process.env

const defaultOptions = {
    baseURL: DISCORD_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bot ' + Buffer.from(TOKEN_BOT, 'base64').toString()
    },
}

const axiosInstance = axios.create(defaultOptions)

module.exports = axiosInstance