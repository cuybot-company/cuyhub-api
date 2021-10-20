'use strict'

const axios = require('axios')
const url = process.env.DISCORD_BASE_URL
const token_bot = process.env.TOKEN_BOT

exports.GetGuild = async (id) => {
    try {
      const endPoint = url + '/api/v9/guilds/' + id + '/preview'
      const result = await axios.get(endPoint, {
        headers: {
            'Authorization': 'Bot '+ token_bot
        }
      })
      return { data: result.data }
    } catch (err) {
      return '0002'
    }
  }
  