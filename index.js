const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const connectionDB = require('./config/mongodb');
const schema = require('./graphql/shema');
const resolver = require('./graphql/resolver');

const app = express();
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
	connectionDB;
	console.log('Server is starting at port: 3000');
});
