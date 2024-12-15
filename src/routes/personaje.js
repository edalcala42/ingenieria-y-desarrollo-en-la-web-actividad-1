const express = require('express')
const router = express.Router();

const personajeController = require('../controllers/personajeController');

router.get('/', personajeController.list);
router.post('/add', personajeController.save);
router.get('/delete/:id', personajeController.erase);
router.get('/update/:id', personajeController.edit);
router.post('/update/:id', personajeController.update);

module.exports = router;