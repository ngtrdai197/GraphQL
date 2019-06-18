const mongoose = require('mongoose');
const constants = require('./constants');

const connectionMongoDB = async () => {
    const url = `mongodb+srv://${constants.USER}:${constants.PASSWORD}@cluster0-esass.mongodb.net/${constants.DB}?retryWrites=true&w=majority`;
    await mongoose.connect(url, { useNewUrlParser: true }).then(() => console.log(`Connect mongoose success`)).catch(err => { throw err });
}
module.exports.connectionMongoDB = connectionMongoDB();