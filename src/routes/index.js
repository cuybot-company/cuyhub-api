'use strict'
const Controller = require('../controllers/mainController')

module.exports = function (app) {
  app.route('/').get(Controller.index)
  app.route('/v1').get(Controller.main)
}
