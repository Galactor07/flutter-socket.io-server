

class Bands {

    constructor () {
        this.bands = [];
    }

 // para crear bandas   
    addBand (band = new Band()) {
       this.bands.push(band);
    }

 // para obtener todas las bandas   
    getBands() {
        return this.bands;
    }

 // para borrar una banda
    deleteBand(id = '')  {

 // esto lo que hace es excluir a la banda del arreglo       
        this.bands = this.bands.filter(band => band.id !== id);
        return this.bands;
    } 

 // para votar
    voteBand(id = '') {
        this.bands = this.bands.map(band => {
            if( band.id === id) {
                band.votes++;
                return band;
            } else {
                return band;
            }
        });
    }   
}

module.exports = Bands;