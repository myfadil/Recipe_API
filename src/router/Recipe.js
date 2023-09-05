const { getData, getDataById, postData, putData, deleteDataById, getMyRecipe } = require("../controller/RecipeController.js")
const { authenticateUser } = require('../middleware/auth.js')
const multerUpload = require('../middleware/multer.js')
const express = require('express')
const router = express.Router()

router.get('/', authenticateUser, getData)
router.get('/my-recipe', authenticateUser, getMyRecipe)
router.get('/:id', authenticateUser, getDataById)
router.post('/', authenticateUser, multerUpload, postData)
router.put('/:id', authenticateUser, multerUpload, putData)
router.delete('/:id', authenticateUser, deleteDataById)


module.exports = router;