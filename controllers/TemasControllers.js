const TemasModel = require('../models/temas');

class TemasController {
    static async indexGet(req, res){
        let data = await TemasModel.consultar();
        res.send(data);
    }
}

module.exports = TemasController;