const { getLike,getLikebyID, getBookmark, getBookmarkbyID,  postLike, postBookmark, deleteLike, deleteBookmark } = require("../model/LikeAndBookmark")

const LikeAndBookmarkController = {
    getLikeRecipe: async (req, res, next) => {
        try {
            const {UserID} = req.query
            parameter = {
                UserID: UserID || "",
            };
            console.log(UserID)

            let dataLikeId = await getLike(UserID)
            console.log('aaa')

            if (!dataLikeId.rows[0]) {
                return res.status(200).json({ "status": 200, "message": "recipe not found", data: [] })
            }

            return res.status(200).json({ "status": 200, "message": "get like recipe success", data: dataLikeId.rows})
        } catch (err) {
            return res.status(404).json({ "status": 404, "message": err.message })

        }
    },

    getLikeRecipeById: async (req, res, next) => {
        try {
            const { UserID, ResepID } = req.query

            const parameter = {
                UserID: UserID || "",
                ResepID: ResepID || "",
            }
            console.log(UserID)
            console.log('aaaa')
            console.log(ResepID)
            console.log('aaaa')

            if (!UserID || UserID <= 0 || isNaN(UserID)) {
                return res.status(404).json({ "message": "User not found" });
            }

            if (!ResepID || ResepID <= 0 || isNaN(ResepID)) {
                return res.status(404).json({ "message": "Recipe not found" });
            }

            let result = await getLikebyID(parameter)
            if (!result.rows[0]) {
                return res.status(200).json({ "status": 200, "message": "like not found", data: [] })
            }

            return res.status(200).json({ "status": 200, "message": "get like recipe success", data: result.rows})
        } catch (err) {
            return res.status(404).json({ "status": 404, "message": err.message })

        }
    },

    

    postLikeRecipe: async (req, res, next) => {

        try {
            const { UserID, ResepID} = req.body
            console.log(req.body)

            let data = {
                UserID: UserID,
                ResepID: ResepID,
            }

            console.log("data")
            console.log(data)
            let result = await postLike(data)
            console.log('ini result',result)

            return res.status(200).json({ "status": 200, "message": "Like success", data })
        } catch (err) {
            return res.status(404).json({ "status": 404, "message": err.message })
        }
    },

    deleteLikeRecipe: async (req, res, next) => {
        try {
            const { UserID, ResepID } = req.query

            const parameter = {
                UserID: UserID || "",
                ResepID: ResepID || "",
            }
            console.log(UserID)
            console.log(ResepID)

            if (!UserID || UserID <= 0 || isNaN(UserID)) {
                return res.status(404).json({ "message": "User not found" });
            }

            if (!ResepID || ResepID <= 0 || isNaN(ResepID)) {
                return res.status(404).json({ "message": "Recipe not found" });
            }

            let result = await deleteLike(parameter)
            console.log('salahh')
            console.log(result)
            if (result.rowCount == 0) {
                throw new Error("delete failed")
            }
            return res.status(200).json({ "status": 200, "message": "delete like success", data: result.rows[0] })

        } catch (err) {
            console.log(err)
            return res.status(404).json({ "status": 404, "message": err.message })
        }
    },

    getBookmarkRecipe: async (req, res, next) => {
        try {
            const {UserID} = req.query
            parameter = {
                UserID: UserID || "",
            };
            console.log(UserID)

            let dataBookmarkId = await getBookmark(UserID)

            if (!dataBookmarkId.rows[0]) {
                return res.status(200).json({ "status": 200, "message": "recipe not found", data: [] })
            }

            return res.status(200).json({ "status": 200, "message": "get bookmark recipe success", data: dataBookmarkId.rows})
        } catch (err) {
            return res.status(404).json({ "status": 404, "message": err.message })

        }
    },

    getBookmarkRecipeById: async (req, res, next) => {
        try {
            const { UserID, ResepID } = req.query

            const parameter = {
                UserID: UserID || "",
                ResepID: ResepID || "",
            }
            console.log(UserID)
            console.log('aaaa')
            console.log(ResepID)
            console.log('aaaa')

            if (!UserID || UserID <= 0 || isNaN(UserID)) {
                return res.status(404).json({ "message": "User not found" });
            }

            if (!ResepID || ResepID <= 0 || isNaN(ResepID)) {
                return res.status(404).json({ "message": "Recipe not found" });
            }

            let result = await getBookmarkbyID(parameter)
            if (!result.rows[0]) {
                return res.status(200).json({ "status": 200, "message": "bookmark not found", data: [] })
            }

            return res.status(200).json({ "status": 200, "message": "get bookmark recipe success", data: result.rows})
        } catch (err) {
            return res.status(404).json({ "status": 404, "message": err.message })

        }
    },

    postBookmarkRecipe: async (req, res, next) => {

        try {
            const { UserID, ResepID } = req.body
            console.log(req.body)

            let data = {
                UserID: UserID,
                ResepID: ResepID,
            }

            console.log("data")
            console.log(data)
            let result = await postBookmark(data)
            console.log(result)

            return res.status(200).json({ "status": 200, "message": "Bookmark success", data })
        } catch (err) {
            return res.status(404).json({ "status": 404, "message": err.message })
        }
    },

    deleteBookmarkRecipe: async (req, res, next) => {
        try {
            const { UserID, ResepID } = req.query

            const parameter = {
                UserID: UserID || "",
                ResepID: ResepID || "",
            }
            console.log(UserID)
            console.log(ResepID)

            if (!UserID || UserID <= 0 || isNaN(UserID)) {
                return res.status(404).json({ "message": "User not found" });
            }

            if (!ResepID || ResepID <= 0 || isNaN(ResepID)) {
                return res.status(404).json({ "message": "Recipe not found" });
            }

            let result = await deleteBookmark(parameter)
            console.log('salahh')
            console.log(result)
            if (result.rowCount == 0) {
                throw new Error("delete failed")
            }
            return res.status(200).json({ "status": 200, "message": "delete bookmark success", data: result.rows[0] })

        } catch (err) {
            console.log(err)
            return res.status(404).json({ "status": 404, "message": err.message })
        }
    },

}

module.exports = LikeAndBookmarkController