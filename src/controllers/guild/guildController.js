'use strict'

const response = require('../../../config/payload_config')

const {
  GetGuild,
  GetGuildRoles,
  GetGuildMember
} = require('../../helpers/guild/guild')

const {
  GET_GUILD, 
  GET_ROLES,
  GET_MEMBERS
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

exports.getGuildMember = async (req, res) => {
  const id = req.params.guild_id
  const limit = req.query.limit || 10
  const after = req.query.after || 0
  const result = await GetGuildMember(id,limit,after)
  console.log(result)
  result ? response.ok(result, GET_MEMBERS, res) : response.err(result, req.originalUrl, 400, res)
}