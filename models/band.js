const {v4: uuidV4} = require('uuid');

class Band {

    constructor( name = 'no-name') {

// esto es para crear un ID único        
        this.id = uuidV4();
        this.name = name;
        this.votes = 0;
    }
}

module.exports = Band;