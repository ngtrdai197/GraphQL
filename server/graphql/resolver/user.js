const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const constants = require('../../config/constants');
const parserMiddleware = require('../../middleware');

module.exports = {
    findAllUser: async () => {
        parserMiddleware();
        return await User.find({});
    },
    createUser: async (body) => {
        const user = new User({
            username: body.userInput.username,
            password: body.userInput.password
        });
        return await user.save();
    },
    findByIdUser: async (body) => {
        return await User.findById(body.id);
    },
    login: async (body, req) => {
        
        const { username, password } = body;
        const user = await User.findOne({ username });
        if (user) {
            if (password === user.password) {
                const userId = user.id;

                const token = await jwt.sign({ username, userId }, constants.SECRECT_KEY, { expiresIn: '1h' })
                return { username, token, expiresIn: 1 }
            }
            throw createError(400, 'Password is incorrect');
        }
        throw createError(400, 'User is not exist');
    }
}