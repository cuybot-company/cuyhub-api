'use strict'
const Guild = require('../../controllers/guild/guildController')

module.exports = function (app) {
  app.route('/v1/guilds/:guild_id').get(Guild.getGuildByID)
}
