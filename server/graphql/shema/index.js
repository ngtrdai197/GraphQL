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
        user: User
    }

    type Auth{
        username: String,
        token: String,
        expiresIn: String
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
        findAllEvent: [Event!]!
        findAllUser: [User!]!
        findByIdUser(id: String!): User!
        findByIdEvent(id: String!): Event!
        login(username: String, password: String): Auth!
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