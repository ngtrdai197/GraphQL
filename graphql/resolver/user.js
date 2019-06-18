const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');

module.exports = {
    findAllUser: async () => {
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

                const token = await jwt.sign({ username, userId }, 'jwtwebtoken', { expiresIn: '1h' })
                return {
                    user: username,
                    token,
                    expiresIn: 1
                }
            }
            throw new Error('Password is incorrect');
        }
        throw new Error('User is not exist');
    }
}