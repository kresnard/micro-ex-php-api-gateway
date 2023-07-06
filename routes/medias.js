const express = require('express');
const router = express.Router();

const mediasHandler = require('./handler/media')

router.post('/', mediasHandler.create)
router.get('/', mediasHandler.getAll)
router.delete('/:id', mediasHandler.destroy)

module.exports = router;
 