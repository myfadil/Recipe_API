const Pool = require('../config/db')

const getRecipeAll = async ({ searchRecipe, searchBy, sortBy, sort, offset, limit }) => {
    return new Promise((resolve, reject) =>
        Pool.query(`SELECT 
        recipe.id,
        recipe.title,
        recipe.ingredients,
        recipe.photo,
        category.category_name AS category,
        users.name AS author,
        users.photo AS author_photo
    FROM 
        recipe
    JOIN 
        category ON recipe.category_id = category.category_id
    JOIN 
        users ON recipe.user_id = users.id WHERE ${searchBy} ILIKE '%${searchRecipe}%' ORDER BY ${sortBy} ${sort} OFFSET ${offset} LIMIT ${limit}`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const getRecipeAllCount = async ({ searchRecipe, searchBy}) => {
    return new Promise((resolve, reject) =>
    Pool.query(`SELECT 
    recipe.id,
    recipe.title,
    recipe.ingredients,
    recipe.photo,
    category.category_name AS category,
    users.name AS author
FROM 
    recipe
JOIN 
    category ON recipe.category_id = category.category_id
JOIN 
    users ON recipe.user_id = users.id WHERE ${searchBy} ILIKE '%${searchRecipe}%'`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const getRecipeById = async (id) => {
    return new Promise((resolve, reject) =>
        Pool.query(`SELECT recipe.id, recipe.title, recipe.ingredients, recipe.photo, recipe.user_id, recipe.category_id, category.category_name AS category, users.name AS author, users.photo AS author_photo
        FROM recipe
        JOIN category ON recipe.category_id = category.category_id
        JOIN users ON recipe.user_id = users.id
        WHERE recipe.id = ${id} `, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const postRecipe = async (data) => {
    const { title, ingredients, category_id, user_id, image } = data
    return new Promise((resolve, reject) =>
        Pool.query(`INSERT INTO recipe(title,ingredients,category_id,photo,user_id, created_at) VALUES('${title}','${ingredients}','${category_id}', '${image}', '${user_id}', CURRENT_TIMESTAMP )`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const putRecipe = async (data, id) => {
    const { title, ingredients, category_id, image } = data
    return new Promise((resolve, reject) =>
        Pool.query(`UPDATE recipe SET title='${title}', ingredients='${ingredients}', photo = '${image}', category_id = '${category_id}' WHERE id=${id}`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

const deleteById = async (id) => {
    console.log("delete recipe by id ->", id)
    return new Promise((resolve, reject) =>
        Pool.query(`DELETE FROM recipe WHERE id=${id}`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    )
}

myRecipeCount = async (data) => {
    const { search, searchBy, id } = data;
    return new Promise((resolve, reject) =>
      Pool.query(
        `SELECT COUNT(*) FROM recipe JOIN category ON recipe.category_id = category.category_id WHERE user_id = ${id} AND ${searchBy} ILIKE '%${search}%'`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      )
    );
  },
  getMyRecipe = async (data) => {
    const { search, searchBy, offset, limit, id, sort } = data;
    return new Promise((resolve, reject) =>
      Pool.query(
        `SELECT 
        recipe.id,
        recipe.title,
        recipe.ingredients,
        recipe.photo,
        category.category_name AS category,
        users.name AS author
    FROM 
        recipe
    JOIN 
        category ON recipe.category_id = category.category_id
    JOIN 
        users ON recipe.user_id = users.id WHERE user_id = ${id} AND ${searchBy} ILIKE '%${search}%' ORDER BY title ${sort} OFFSET ${offset} LIMIT ${limit}`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      )
    );
  }

module.exports = { getRecipeAll, getRecipeAllCount, getRecipeById, postRecipe, putRecipe, deleteById, myRecipeCount, getMyRecipe }