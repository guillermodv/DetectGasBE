const express = require('express')
const router = express.Router()
const UserController = require('../controller/user.controller')
const SensorController = require('../controller/sensor.controller')

//ROUTES
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to BE application.' })
})

//USER
router.post('/user', UserController.create)
router.get('/users', UserController.findAll)
router.get('/users/:id', UserController.findOne)

//SENSORS
router.get('/sensors/:id/:measurement', SensorController.read)

router.get('*', (req, res) => {
  res.send('path do not exits')
})

module.exports = router
