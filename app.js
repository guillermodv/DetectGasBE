require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/routes.js')
const cors = require('cors')

var app = express()
var port = process.env.APP_PORT

var corsOptions = {
  origin: 'http://localhost:8081',
}
app.use(cors(corsOptions))

//MIDDLEWARE
app.use(morgan('dev'))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

//ROUTES
app.use(routes)

//DB
const db = require('./models')
db.sequelize.sync()

app.listen(port, () => {
  console.log('Server Listen at:', port)
})

module.exports = app
