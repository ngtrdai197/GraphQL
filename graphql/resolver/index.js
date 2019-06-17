const Event = require('../../models/event.model');
const User = require('../../models/user.model');

module.exports = {
    events: async () => {
        return await Event.find({});
    },
    createEvent: async (body) => {
        const event = new Event({
            title: body.eventInput.title,
            description: body.eventInput.description,
            price: +body.eventInput.price,
            user: body.eventInput.user
        });
        return await event.save();
    },
    users: async () => {
        return await User.find({});
    },
    createUser: async (body) => {
        const user = new User({
            username: body.userInput.username,
            password: body.userInput.password
        });
        return await user.save();
    }
}