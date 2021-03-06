const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Dependency injection Properties
let PropertiesService = require('../service/PropertiesService');
const PropertiesController = 
  require('../controller/PropertiesController')(new PropertiesService(db));


router.get('/:id', PropertiesController.index);
router.get('/', PropertiesController.show);
router.post('/:id', PropertiesController.tradeItems);

module.exports = router

