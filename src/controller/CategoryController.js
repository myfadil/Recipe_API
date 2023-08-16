const { getCategoryAll, getCategoryById, postCategory, putCategory, deleteById } = require("../model/CategoryModel")

const CategoryController = {
    getData: async (req, res, next) => {
        try {
            let data = await getCategoryAll()
            if (data) {
                res.status(200).json({ "status": 200, "message": "get data category success", data: data.rows })
            }
        } catch (err) {
            return res.status(404).json({ "status": 404, "message": err.message })
        }
    },

    getDataById: async (req, res, next) => {
        try {
            const { id } = req.params

            if (!id || id <= 0 || isNaN(id)) {
                return res.status(404).json({ "message": "id wrong" });
            }

            let dataCategoryId = await getCategoryById(parseInt(id))

            if (!dataCategoryId.rows[0]) {
                return res.status(200).json({ "status": 200, "message": "get data recipe not found", data: [] })
            }

            return res.status(200).json({ "status": 200, "message": "get data recipe success", data: dataCategoryId.rows[0] })
        } catch (err) {
            return res.status(404).json({ "status": 404, "message": err.message })
        }
    },

    postData: async (req, res, next) => {

        try {
            const { category_name } = req.body
            console.log("post data")
            console.log(category_name)

            if (!category_name) {
                return res.status(404).json({ "message": "input id name no required" });
            }
            let data = {
                category_name: category_name
            }

            console.log("data")
            console.log(data)
            let result = await postCategory(data)
            console.log(result)

            return res.status(200).json({ "status": 200, "message": "data recipe success", data })
        } catch (err) {
            return res.status(404).json({ "status": 404, "message": err.message })
        }
    },

    putData: async (req, res, next) => {
        try {
            const { id } = req.params
            const { category_name } = req.body

            if (!id || id <= 0 || isNaN(id)) {
                return res.status(404).json({ "message": "id wrong" });
            }

            let dataCategoryId = await getCategoryById(parseInt(id))
            if (dataCategoryId.rowCount === 0) {
                return res.status(404).json({ "status": 404, "message": "The data you tried to update is not found in the database" });
            }
            let data = {
                category_name: category_name || dataCategoryId.rows[0].category_name,
            }

            let result = await putCategory(data, id)

            return res.status(200).json({ "status": 200, "message": "update data recipe success", data })
        } catch (err) {
            return res.status(404).json({ "status": 404, "message": err.message })

        }

    },

    deleteDataById: async (req, res, next) => {
        try {
            const { category_id } = req.params

            if (!category_id || category_id <= 0 || isNaN(category_id)) {
                return res.status(404).json({ "message": "id wrong" });
            }

            let result = await deleteById(parseInt(category_id))
            console.log(result)
            if (result.rowCount == 0) {
                throw new Error("delete data failed")
            }
            return res.status(200).json({ "status": 200, "message": "delete data category success", data: result.rows[0] })

        } catch (err) {
            return res.status(404).json({ "status": 404, "message": err.message })
        }
    }


}



module.exports = CategoryController