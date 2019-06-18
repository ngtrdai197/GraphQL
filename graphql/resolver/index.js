const userResolver = require('./user');
const eventResolver = require('./event');

const rootResolver  = {
    ...userResolver,
    ...eventResolver
};

module.exports = rootResolver;