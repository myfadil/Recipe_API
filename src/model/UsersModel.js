const Pool = require('../config/db')

const getUsersAll = async () => {
    return new Promise((resolve, reject) =>
        Pool.query(`SELECT * FROM users `, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const getLogin = async (email) => {
    return new Promise((resolve, reject) =>
        Pool.query(`SELECT * FROM users WHERE email = '${email}' `, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const getUsersById = async (id) => {
    return new Promise((resolve, reject) =>
        Pool.query(`SELECT * FROM users WHERE id=${id}`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const getUsersByEmail = async (email) => {
    return new Promise((resolve, reject) =>
        Pool.query(`SELECT * FROM users WHERE email='${email}'`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const postUsers = async (data) => {
    const { name, email, password } = data
    console.log(data)
    console.log("model postData")
    return new Promise((resolve, reject) =>
        Pool.query(`INSERT INTO users(name,email,password) VALUES('${name}','${email}','${password}')`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const putUsers = async (data, id) => {
    const { name, email, password, image } = data
    return new Promise((resolve, reject) =>
        Pool.query(`UPDATE users SET name='${name}',email='${email}',password='${password}', photo = '${image}' WHERE id=${id}`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const deleteById = async (id) => {
    console.log("delete users by id ->", id)
    return new Promise((resolve, reject) =>
        Pool.query(`DELETE FROM users WHERE id=${id}`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}



module.exports = { getUsersAll, getLogin, getUsersById, getUsersByEmail, postUsers, putUsers, deleteById }