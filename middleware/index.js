const jwt = require('jsonwebtoken');
const parser = async (req, res, next) => {
    const token = req.get("Authorization");
    if (token) {
        const decoded = await jwt.verify(token, 'jwtwebtoken');
        if (!decoded) {
            return res.status(401).send({ statusCode: 401, message: "Unauthorization" });
        } 
        req.user = decoded.userId;
        return next();
    }
}

module.exports = parser;