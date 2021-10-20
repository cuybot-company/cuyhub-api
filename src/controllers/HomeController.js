const {isAdmin} = require('../validations/HomeValidation')
// const {} = require('../helpers/HomeHelper') for function helper
// const {} = require('../models/HomeModel') for connect to database
// const {} = require('../Middlewares/HomeMiddleware')

exports.home = (req, res) => {
    const idAdmin = 1234


    res.send(isAdmin(idAdmin))
}