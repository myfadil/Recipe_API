const app = require("express")
const router = app.Router()
const Recipe = require("./Recipe")
const Category = require("./Category")
const Users = require("./Users")
const Comment = require("./Comment")
const LikeAndBookmark = require("./LikeAndBookmark")


router.use('/recipe', Recipe)
router.use('/category', Category)
router.use('/users', Users)
router.use('/comment', Comment)
router.use('/likeandbookmark', LikeAndBookmark)



module.exports = router;