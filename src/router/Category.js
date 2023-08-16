const { getData, getDataById, postData, putData, deleteDataById } = require("../controller/CategoryController")
const express = require('express')
const router = express.Router()


router.get('/', getData)
router.get('/:id', getDataById)
router.post('/', postData)
router.put('/:id', putData)
router.delete('/:category_id', deleteDataById)

module.exports = router;
