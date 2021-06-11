// para importar un nodulo
const {io} = require('../index');

const Band = require('../models/band');
const Bands = require('../models/bands');
const bands = new Bands();

bands.addBand(new Band('Queen'));
bands.addBand(new Band('Bon Jovi'));
bands.addBand(new Band('Metallica'));
bands.addBand(new Band('Herores del silencio'));


// mensajes de sockets, client es un ordenador que se conecta al servidor
io.on('connection', client => {
    console.log('Cliente conectado');

 // para pasarle las bandas al cliente
    client.emit('active-bands', bands.getBands());   
    
    client.on('disconnect', () => { 
       console.log('Cliente desconectado')
    });
 
 // para escuchar el mensaje
    client.on('mensaje', (payload) => {
       console.log('mensaje...', payload);
 
  // para enviar un mensaje a todos los clientes conectados
       io.emit('mensaje', {admin: 'Nuevo mensaje'});
 
    });

 // recibir los cambios de votos de una banda
    client.on('vote-band', (payload) => {
        bands.voteBand(payload.id);
         // para actualizar los votos en todos los clientes
        io.emit('active-bands', bands.getBands());   
    
    });  

 // para agregar una nueva banda
    client.on('add-band', (payload) => {
       const newBand = new Band(payload.name);
       bands.addBand(newBand);
 // para actualizar los votos en todos los clientes
      io.emit('active-bands', bands.getBands());   

    });  

 // para eliminar una banda
    client.on('delete-band', (payload) => {
       bands.deleteBand(payload.id);
// para actualizar las bandas en todos los clientes
       io.emit('active-bands', bands.getBands());   

    });  
/*
 // para emitir un mensaje
    client.on('emitir-mensaje', (payload) => {

 //     console.log(payload);
 
// esto lo emite a todos los clientes
//      io.emit('nuevo-mensaje', payload); 

// esto lo emite a todos menos al mismo cliente
        client.broadcast.emit('nuevo-mensaje', payload); 

    }); */

  }); 
 
 