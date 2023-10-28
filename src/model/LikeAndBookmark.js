const Pool = require('../config/db')

const getLike = async (UserID) => {
    return new Promise((resolve, reject) =>
        Pool.query(`SELECT recipe.*
        FROM recipe
        INNER JOIN Likes L ON recipe.id = L.ResepID
        WHERE L.UserID = ${UserID};`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const getLikebyID = async ({UserID, ResepID}) => {
    return new Promise((resolve, reject) =>
        Pool.query(`SELECT recipe.*
        FROM recipe
        INNER JOIN Likes L ON recipe.id = L.ResepID
        WHERE L.UserID = ${UserID} AND ResepID = ${ResepID}`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const getBookmark = async (UserID) => {
    return new Promise((resolve, reject) =>
        Pool.query(`SELECT recipe.*
        FROM recipe
        INNER JOIN Bookmarks B ON recipe.id = B.ResepID
        WHERE B.UserID = ${UserID};`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const getBookmarkbyID = async ({UserID, ResepID}) => {
    return new Promise((resolve, reject) =>
        Pool.query(`SELECT recipe.*
        FROM recipe
        INNER JOIN Bookmarks B ON recipe.id = B.ResepID
        WHERE B.UserID = ${UserID} AND ResepID = ${ResepID}`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const postLike = async (data) => {
    const { UserID, ResepID } = data
    console.log(data)
    return new Promise((resolve, reject) =>
        Pool.query(`INSERT INTO Likes (UserID, ResepID)
        VALUES (${UserID}, ${ResepID})`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const postBookmark = async (data) => {
    const { UserID, ResepID } = data
    console.log(data)
    return new Promise((resolve, reject) =>
        Pool.query(`INSERT INTO Bookmarks (UserID, ResepID)
        VALUES (${UserID}, ${ResepID})`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}


const deleteLike = async ({UserID, ResepID}) => {
    return new Promise((resolve, reject) =>
        Pool.query(`DELETE FROM Likes WHERE UserID = ${UserID} AND ResepID = ${ResepID}`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const deleteBookmark = async ({UserID, ResepID}) => {
    return new Promise((resolve, reject) =>
        Pool.query(`DELETE FROM Bookmarks WHERE UserID = ${UserID} AND ResepID = ${ResepID}`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

module.exports = {
    getLike, getLikebyID, getBookmark,getBookmarkbyID, postLike, postBookmark, deleteLike, deleteBookmark
}