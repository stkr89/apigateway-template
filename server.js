const express = require('express')
const httpProxy = require('express-http-proxy')
const cors = require('cors')
const morgan = require('morgan')
const { authenticationError } = require('aws-cognito-express');
const authenticate = require('./util/aws-cognito-jwt-verifier')

const port = 9001

const app = express()
app.use(cors())
app.use(morgan('combined'))

// Authentication
app.use(authenticate);
app.use(authenticationError());

// Proxy request
const modelsvcProxy = httpProxy('http://modelsvc:9002')
app.all('/api/model/v1/*', (req, res, next) => {
  modelsvcProxy(req, res, next)
})

// Listen
app.listen(port, () => {
  console.log(`gatewaysvc listening at :${port}`)
})