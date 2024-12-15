const express = require('express')
const router = express.Router();

const juegoController = require('../controllers/indexController');

router.get('/', juegoController.list);

module.exports = router;