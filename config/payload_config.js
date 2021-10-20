'use strict'
const err_code = require('./../config/err_code.json')
exports.ok = function (payload, message, res) {
  const datas = {
    success: true,
    statusCode: res.statusCode,
    message,
    payload
  }
  res.json(datas)
  res.end()
}

exports.err = function (error, uri, statusCode, res) {
  const index = err_code.findIndex(result => result.code == error)
  const data = {
    statusCode: statusCode,
    error: {
      message: err_code[index].message,
      code: error,
      uri
    }
  }
  res.json(data)
  res.end()
}

exports.errAuthorize = function (values, res) {
  var data = {
    error: { message: values }
  }
  res.json(data)
  res.end()
}
