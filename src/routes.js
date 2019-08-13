const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  res.json({name: 'Sany'})
})

routes.post('/devs', (req, res) => {
  console.log(req.body)
  res.json({ok: true})
})

module.exports = routes;