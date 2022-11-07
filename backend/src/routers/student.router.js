const express = require('express');
const StudentControllers = require('../controllers/students');

const router = express.Router();

router.get('/students', StudentControllers.getAll);
router.get('/students/alphabetic-order', StudentControllers.getAllAlphabetic);
router.get('/students/:id', StudentControllers.getById);

router.post('/students', StudentControllers.create);

router.delete('/students/:id', StudentControllers.remove);

router.put('/students/:id', StudentControllers.update);

module.exports = router;