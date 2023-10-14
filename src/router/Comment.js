const { getDataById, postData, putData, deleteCommentById } = require("../controller/CommentController")
const express = require('express')
const router = express.Router()


router.get('/:id', getDataById)
router.post('/', postData)
router.put('/:id', putData)
router.delete('/:id', deleteCommentById)

module.exports = router;
