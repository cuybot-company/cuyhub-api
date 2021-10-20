'use strict'

const response = require('../../config/payload_config')

exports.index = (req, res) => {
  response.ok({ data: 'API CuyHub V1 Ready!' }, 'OK', res)
}

exports.main = (req, res) => {
  response.ok(
    {
      data: {
        version: 'CuyHub-v1',
        requirements: 'bearer authorization'
      }
    },
    'Connect to API',
    res
  )
}
