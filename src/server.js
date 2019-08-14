const express = require('express');
const routes = require('./routes');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');

//CONNECT DATABASE
const data = require('../data')
mongoose.connect(data.mangodbUrl, { useNewUrlParser: true })

server.use(cors())
server.use(express.json())
server.use(routes)

// SERVER LISTEN
const port = 3333;

server.listen(port, () => {
  console.log(`Rondando na porta ${port}`)
})