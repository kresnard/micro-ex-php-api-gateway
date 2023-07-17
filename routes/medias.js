const express = require('express');
const router = express.Router();

const verifyToken = require('../middlewares/verifyToken');
const mediasHandler = require('./handler/media')

router.post('/', mediasHandler.create)
router.get('/', verifyToken, mediasHandler.getAll)
router.delete('/:id', mediasHandler.destroy)

module.exports = router;
 