const router = require('express').Router();
const dataController = require('../controllers/dataController');

router.post('/user', dataController.userDataController);

module.exports = router;