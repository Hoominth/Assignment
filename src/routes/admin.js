const express = require('express')
const router = express.Router()
const adminController = require('../app/controllers/adminController')

router.get('/edit/:id', adminController.update)
router.get('/', adminController.index)
router.post('/', adminController.create)
router.get('/delete/:id', adminController.delete)

module.exports = router