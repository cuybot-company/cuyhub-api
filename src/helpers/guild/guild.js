'use strict'

const axios = require('axios')

const { TOKEN_BOT } = process.env
const endpoint = require('../endpoint/endpoint')

exports.GetGuild = async (id) => {
  try {
    const endPoint = endpoint.GUILDS + id + '/preview'
    const result = await axios.get(endPoint, {
      headers: {
        'Authorization': 'Bot ' + TOKEN_BOT
      }
    })
    return {
      data: result.data
    }
  } catch (err) {
    return '0002'
  }
}

exports.GetGuildRoles = async (id) => {
  try {
    const endPoint = endpoint.GUILDS + id + '/roles'
    const result = await axios.get(endPoint, {
      headers: {
        'Authorization': 'Bot ' + TOKEN_BOT
      }
    })
    
    return { data: result.data.filter(data => {
      return data.name !== "@everyone" && data.tags === undefined
    }) }
  } catch (err) {
    return ''
  }
}