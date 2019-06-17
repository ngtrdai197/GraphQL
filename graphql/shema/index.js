const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type User{
        _id: ID!
        username: String!
        password: String!
    }

    type Event{
        _id: ID!
        title: String!
        description: String!
        price: Float!
        user: String!
    }

    input EventInput{
        title: String!
        description: String!
        price: Float!
        user: String!
    }
    input UserInput{
        username: String!
        password: String!
    }

    type RootQuery{
        events: [Event!]!
        users: [User!]!
    }

    type RootMutation{
        createEvent(eventInput: EventInput):Event
        createUser(userInput: UserInput):User
    }

    schema{
        query: RootQuery
        mutation: RootMutation
    }

`);