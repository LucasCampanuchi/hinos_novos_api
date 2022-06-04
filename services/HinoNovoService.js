const HinoNovo = require('../models/hino_novo')

class HinoNovoService {
    save (data) {
        return HinoNovo.create(data)
    }

    findAll() {
        return HinoNovo.findAll({})
    }

    findById(id) {
        return HinoNovo.findOne({
            where: {
                id: id
            }
        })
    }
}

module.exports = new HinoNovoService()