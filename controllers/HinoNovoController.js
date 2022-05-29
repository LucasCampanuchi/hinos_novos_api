const hinoNovoService = require('../services/HinoNovoService')

class HinoNovoController {

    async save(req, res){
        const { name, text } = req.body

        if (!name) {
            res.status(400)
            return res.json({msg: "Nome não informado"});
        }

        if (!text) {
            res.status(400)
            return res.json({msg: "Texto não informado"});            
        }

        try {
            await hinoNovoService.save(
                {
                    name: name, 
                    text: text,
                }
            )

            res.status(200)
            return res.json({msg: "Hino Gravado com sucesso"});
        } catch (error) {
            console.log(error)
            res.status(500)
            return res.json({msg: "Server Error"});
        }
    }

    async list(req, res){

        try {
            const result = await hinoNovoService.findAll()

            console.log(result)

            res.status(200)
            return res.json({data: result});
        } catch (error) {
            console.log(error)
            res.status(500)
            return res.json({msg: "Server Error"});
        }
    }

}

module.exports = new HinoNovoController();