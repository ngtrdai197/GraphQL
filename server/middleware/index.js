const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const constants = require('../config/constants');

const parser = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (token) {
            const decoded = await jwt.verify(token, constants.SECRECT_KEY);
            if (!decoded) {
                return res.status(401).send({ statusCode: 401, message: "Unauthorization" });
            }
            req.user = decoded.userId;
            return next();
        }
        return res.status(401).send({ statusCode: 401, message: "Unauthorization" });
    } catch (error) {
        throw error;
    }

}

module.exports = parser;