'use strict'

const response = require('../../../config/payload_config')
const guild = require('../../helpers/guild/guild')
const messages = require('../../helpers/message/message')

exports.getGuildByID = async (req, res) => {
  const id = req.params.guild_id
  const result = await guild.GetGuild(id)
  result.data ? response.ok(result, messages.GET_GUILD, res) : response.err(result, req.originalUrl, 400, res)
}

exports.getGuildRolesByID = async (req, res) => {
  const id = req.params.guild_id
  const result = await guild.GetGuildRoles(id)
  result.data ? response.ok(result, messages.GET_ROLES, res) : response.err(result, req.originalUrl, 400, res)
}