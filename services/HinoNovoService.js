const HinoNovo = require('../models/hino_novo')

class HinoNovoService {
    save (data) {
        return HinoNovo.create(data)
    }

    findAll() {
        return HinoNovo.findAll({})
    }
}

module.exports = new HinoNovoService()