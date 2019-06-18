const Event = require('../../models/event.model');

module.exports = {
    findAllEvent: async () => {
        return await Event.find({}).populate({ path: 'user', select: '-password' });
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
    findByIdEvent: async (body) => {
        return await Event.findById(body.id).populate({ path: 'user', select: '-password' });
    }
};