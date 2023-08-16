const GenerateToken = require("jsonwebtoken");

const createToken = (data) => {
    return GenerateToken.sign(data, process.env.JWT_TOKEN);
};

const tokenValidation = (token) => GenerateToken.verify(token, process.env.JWT_TOKEN);

module.exports = {
    createToken,
    tokenValidation,
};