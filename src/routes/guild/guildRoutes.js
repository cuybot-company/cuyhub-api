'use strict'

const {
  getGuildByID,
  getGuildRolesByID
}= require('../../controllers/guild/guildController')

module.exports = function (app) {
  app.route('/v1/guilds/:guild_id').get(getGuildByID)
  app.route('/v1/guilds/:guild_id/roles').get(getGuildRolesByID)
}
