// para importar un nodulo
const {io} = require('../index');

// mensajes de sockets, client es un ordenador que se conecta al servidor
io.on('connection', client => {
    console.log('Cliente conectado');
    
    client.on('disconnect', () => { 
       console.log('Cliente desconectado')
    });
 
 // para escuchar el mensaje
    client.on('mensaje', (payload) => {
       console.log('mensaje...', payload);
 
  // para enviar un mensaje a todos los clientes conectados
       io.emit('mensaje', {admin: 'Nuevo mensaje'});
 
    });
  }); 
 
 