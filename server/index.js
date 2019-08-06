const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const databaseConnection = require('./config/mongodb');
const schema = require('./graphql/shema');
const resolver = require('./graphql/resolver');
const parserMiddleware = require('./middleware');

const app = express();

// app.use(parserMiddleware);
app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
	schema: schema,
	rootValue: resolver,
	graphiql: true
}));

app.get("/", (req, res) => {
	return res.send("Hello \n World");
})

app.listen(3000, () => {
	databaseConnection();
	console.log('Server is starting at port: 3000 🚀 🚀 🚀');
});
