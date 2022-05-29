var bodyParser = require('body-parser')
var express = require("express")
var app = express()
var cors = require("cors")
var router = require("../routes/routes")

module.exports = initServer = () => {
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    
    app.use("/api/", router);
    
    app.listen(3000 || process.env.PORT, () => {
        console.log("Servidor rodando")
    });
}
 
