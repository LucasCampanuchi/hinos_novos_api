var express = require("express")
var router = express.Router();

const hinoNovoController = require('../controllers/HinoNovoController')

router.get('/hinonovo', hinoNovoController.list)
router.post('/hinonovo', hinoNovoController.save)

module.exports = router