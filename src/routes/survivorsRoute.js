const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Dependency injection Survivors
let SurvivorsService = require('../service/SurvivorsService');
const SurvivorsController = 
  require('../controller/SurvivorsController')(new SurvivorsService(db));

router.get('/:id', SurvivorsController.index);
router.get('/', SurvivorsController.show);
router.post('/register', SurvivorsController.store);
router.patch('/report_infection/:id', SurvivorsController.updateInfectionIndicator);
router.patch('/:id/place', SurvivorsController.update);
module.exports = router