const { getData, getDataLogin, getDataById, postData, putData, deleteDataById } = require("../controller/UsersController")
const { authenticateUser } = require('../middleware/auth')
const multerUpload = require('../middleware/multer.js')
const express = require('express')
const router = express.Router()

router.get('/', getData)
router.post('/login', getDataLogin)
router.get('/:id',authenticateUser, getDataById)
router.post('/register', postData)
router.put('/:id', authenticateUser, multerUpload, putData)
router.delete('/:id', authenticateUser, deleteDataById)

module.exports = router;