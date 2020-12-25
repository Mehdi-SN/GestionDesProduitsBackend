const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');



router.post('/',  stuffCtrl.createThing );
router.put('/:id', stuffCtrl.modifyThing);
router.delete('/:id', stuffCtrl.deleteThing);
router.get('/:id', stuffCtrl.getOneThing);
router.get('/', stuffCtrl.getAllThing);


module.exports = router;
