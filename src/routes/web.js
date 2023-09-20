const express = require('express');
const router = express.Router();
const { getHomePage, getUsersPage } = require('../controllers/homeController.js');

router.get('/', getHomePage);
router.get('/users', getUsersPage);

module.exports = router;