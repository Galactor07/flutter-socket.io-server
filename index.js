const { Socket } = require('dgram');
const express = require('express');
const path = require('path');

// para establecer las variables de entorno del .env
require('dotenv').config();

// esta es la app de express
const app = express();

// servidor de Node
const server = require('http').createServer(app);

// usando el module.exports se puede usar en otros modulos
module.exports.io = require('socket.io')(server);

// ejecutar el archivo socket,js
require('./sockets/socket');


// path publico
const publicPath = path.resolve(__dirname, 'public');

// para mostrar la web
app.use(express.static(publicPath));

// creando la app para escuchar por el puerto  del archivo .env
server.listen(process.env.PORT, (err) => {

   if (err) throw new Error(err);

   console.log('Servidor corriendo en puerto', process.env.PORT);

} );