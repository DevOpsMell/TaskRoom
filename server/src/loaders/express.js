const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const v1Router = require('../routes')
const config = require('../config')
const bodyParser = require('body-parser')


module.exports = async (app) => {
  app.use(cors())
  app.use(express.json())
  app.use(morgan('dev'))
  app.use(bodyParser.json())
  app.use(config.api.prefix, v1Router)
  // testing only
  app.get('/', (req, res) => {
    res.send('Hello, world!')
  })
  return app
}