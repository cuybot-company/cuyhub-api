'use strict'

const response = require('../../../config/payload_config')

const {
  GetGuild,
  GetGuildRoles
} = require('../../helpers/guild/guild')

const {
  GET_GUILD, 
  GET_ROLES
} = require('../../helpers/message/message')

exports.getGuildByID = async (req, res) => {
  const id = req.params.guild_id
  const result = await GetGuild(id)
  result.data ? response.ok(result, GET_GUILD, res) : response.err(result, req.originalUrl, 400, res)
}

exports.getGuildRolesByID = async (req, res) => {
  const id = req.params.guild_id
  const result = await GetGuildRoles(id)
  result.data ? response.ok(result, GET_ROLES, res) : response.err(result, req.originalUrl, 400, res)
}