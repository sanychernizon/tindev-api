const express = require('express');
const DevController = require('./controllers/DevController')
const routes = express.Router();

routes.get('/', (req, res) => {
  res.json({name: 'Sany'})
})

routes.post('/devs', DevController.store)

module.exports = routes;