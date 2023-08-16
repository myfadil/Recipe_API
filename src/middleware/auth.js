const { tokenValidation } = require("../helper/GenerateToken");
const authenticateUser = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(404).json({ "status": 403, "message": 'Need Token' })
    }
    const accessToken = authHeader.split(" ")[1];

    try {
        if (accessToken) {
            const currentUser = tokenValidation(accessToken);
            
            req.user = currentUser;
            return next();
        }
        next();
    } catch (error) {
        return res.status(403).json({ "status": 403, "message": error })
    }
};

module.exports = {
    authenticateUser,
};