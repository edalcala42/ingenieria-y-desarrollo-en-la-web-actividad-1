const express = require('express')
const router = express.Router();

const juegoController = require('../controllers/juegoController');

router.get('/', juegoController.list);
router.post('/add', juegoController.save);

module.exports = router;