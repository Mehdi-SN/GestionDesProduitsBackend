const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');


router.post('/signup', userCtrl.signup);
router.post('/signin', userCtrl.login);
router.get('/users', userCtrl.getAllUser);



module.exports = router;


