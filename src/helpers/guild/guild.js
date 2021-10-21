'use strict'

const axios = require('../axios/axios')
const {GUILDS} = require('../endpoint/endpoint')

exports.GetGuild = async (id) => {
  try {
    const endPoint = GUILDS + id + '/preview'
    const result = await axios.get(endPoint)
    return {
      data: result.data
    }
  } catch (err) {
    return '0002'
  }
}

exports.GetGuildRoles = async (id) => {
  try {
    const endPoint = GUILDS + id + '/roles'
    const result = await axios.get(endPoint)
    
    return { data: result.data.filter(data => {
      return data.name !== "@everyone" && data.tags === undefined
    }) }
  } catch (err) {
    return '0002'
  }
}