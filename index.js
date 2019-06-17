const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const connectionDB = require('./config/mongodb');
const Event = require('./models/event.model');

const app = express();
app.use(bodyParser.json());


let events = [];

app.use('/graphql', graphqlHttp({
	schema: buildSchema(`
			type Event{
				_id: ID!
				title: String!
				description: String!
				price: Float!
			}

			input EventInput{
				title: String!
				description: String!
				price: Float!
			}

			type RootQuery{
				events: [Event!]!	
			}

			type RootMutation{
				createEvent(eventInput: EventInput):Event
			}
			
			schema{
				query: RootQuery
				mutation: RootMutation
			}
			
		`),
	rootValue: {
		events: async () => {
			return await Event.find({});
		},
		createEvent: async (body) => {
			const event = new Event({
				title: body.eventInput.title,
				description: body.eventInput.description,
				price: +body.eventInput.price
			});
			return await event.save();
		}
	},
	graphiql: true
}));

app.get("/", (req, res) => {
	return res.send("Hello \n World");
})

app.listen(3000, () => {
	connectionDB;
	console.log('Server is starting at port: 3000');
});
