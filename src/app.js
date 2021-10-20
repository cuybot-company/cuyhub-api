require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const response = require('../config/payload_config')
const { BEARER, PORT } = process.env

const app = express()

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/'))
app.use(express.static(__dirname + 'public'))

const main_routes = require('./routes/index')
const guild = require('./routes/guild/guildRoutes')


main_routes(app)
guild(app)

app.get('/', function (req, res) {
  res.send('Cuyhub API V1 is ready to use!')
})

app.use((req, res, next) => {
    const bearerToken = BEARER
    if (
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] == 'Bearer'
      ) {
      var setBearer = req.headers.authorization.split(' ')[1]
      if (setBearer != bearerToken) {
        return response.errAuthorize('UnAuthorized Permission Denied', res.status(500))
      } else {
        next()
      }
    } else {
      return response.errAuthorize('UnAuthorized Permission Denied', res.status(500))
    }
})

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})
