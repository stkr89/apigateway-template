const express = require('express')
const httpProxy = require('express-http-proxy')
const cors = require('cors')
const morgan = require('morgan')
const port = 9001

const app = express()
app.use(cors())
app.use(morgan('combined'))

const modelsvcProxy = httpProxy('http://modelsvc:9002')

// Authentication
app.use((req, res, next) => {
  // TODO: my authentication logic
  next()
})

// Proxy request
app.all('/api/v1/model/*', (req, res, next) => {
  modelsvcProxy(req, res, next)
})

// Listen
app.listen(port, () => {
    console.log(`gatewaysvc listening at :${port}`)
})