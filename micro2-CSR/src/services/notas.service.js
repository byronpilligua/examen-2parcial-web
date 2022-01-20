
const BaseRepository = require('./base.repository');
let _notas= null;

class notasRepository extends BaseRepository {
    constructor({notas}){
        super(notas);
        _notas = notas
    }
    async getnotasBynotasName(notasname){
        return await _notas.findOne({notasname});
    }
}

module.exports = notasRepository;