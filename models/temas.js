const db = require('../dbconnection');

class TemasModel {
    static async consultar() {
        let query = db('temas');
        return await query;
    }

    static async consultarPorID(id){
        return await db('temas').where('id_tema', id);
    }
    
}

module.exports = TemasModel;