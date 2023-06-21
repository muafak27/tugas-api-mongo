const express = require('express')
const router = express.Router()
const homeController = require('../controller/home')

// read
router.get('/', homeController.readData)
// get 1 data
router.get('/:id', homeController.getDataOne)
// create
router.post('/', homeController.createData)
// delete
router.delete('/:id', homeController.deleteData)
// update
router.put('/:id', homeController.updateData)



module.exports = router;