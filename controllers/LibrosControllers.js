const LibrosModel = require('../models/libros');

class LibrosController {
    static async indexGet(req, res){
        let data = await LibrosModel.consultar();
        res.send(data);
    }
}

module.exports = LibrosController;