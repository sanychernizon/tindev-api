const express = require('express');
const routes = require('./routes')
const server = express();
const mongoose = require('mongoose');

//CONNECT DATABASE

server.use(express.json())
server.use(routes)

// SERVER LISTEN
const port = 3333;

server.listen(port, () => {
  console.log(`Rondando na porta ${port}`)
})