const Pool = require('../config/db')

const getCategoryAll = async () => {
    console.log("model getCategory")
    return new Promise((resolve, reject) =>
        Pool.query(`SELECT * FROM category`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const getCategoryById = async (id) => {
    return new Promise((resolve, reject) =>
        Pool.query(`SELECT * FROM category WHERE category_id=${id}`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const postCategory = async (data) => {
    const { category_name } = data
    console.log(data)
    console.log("model postRecipe")
    return new Promise((resolve, reject) =>
        Pool.query(`INSERT INTO category(category_name) VALUES('${category_name}')`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const putCategory = async (data, id) => {
    const { category_name } = data
    return new Promise((resolve, reject) =>
        Pool.query(`UPDATE category SET category_name='${category_name}' WHERE category_id=${id}`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const deleteById = async (category_id) => {
    console.log("delete recipe by id ->", category_id)
    return new Promise((resolve, reject) =>
        Pool.query(`DELETE FROM category WHERE category_id=${category_id}`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}


module.exports = { getCategoryAll, getCategoryById, postCategory, putCategory, deleteById }