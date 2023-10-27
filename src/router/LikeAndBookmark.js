const { getLikeRecipe,getLikeRecipeById , getBookmarkRecipe, postLikeRecipe, postBookmarkRecipe, deleteLikeRecipe, deleteBookmarkRecipe } = require("../controller/LikeAndBookmarkController")
const express = require('express')
const router = express.Router()


router.get('/like', getLikeRecipe)
router.get('/like/:id', getLikeRecipeById)
router.get('/bookmark', getBookmarkRecipe)
router.post('/like', postLikeRecipe)
router.post('/bookmark', postBookmarkRecipe)
router.delete('/like', deleteLikeRecipe)
router.delete('/bookmark', deleteBookmarkRecipe)

module.exports = router;
