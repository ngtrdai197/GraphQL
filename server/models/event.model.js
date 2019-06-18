const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    user: { type: mongoose.Types.ObjectId, ref: 'user' }
});
module.exports = mongoose.model('Event', eventSchema);