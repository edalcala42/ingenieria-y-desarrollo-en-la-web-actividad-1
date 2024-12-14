const express = require('express')
const router = express.Router();

const juegoController = require('../controllers/juegoController');

router.get('/', juegoController.list);
router.post('/add', juegoController.save);
router.get('/delete/:id', juegoController.erase);
router.get('/update/:id', juegoController.edit);
router.post('/update/:id', juegoController.update);

module.exports = router;