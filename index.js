const express = require('express');
const path = require('path');
const cors = require('cors');
const config = require('config');

// const { addHero, getHeroes } = require('./data/db');

const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');

const PORT = config.get('PORT') || 5000;
// const HOST = config.get('HOST');

const Query = require('./graphql/query');
const Mutation = require('./graphql/mutation');

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

const app = express();

app.use(cors());
// Init Middleware
// app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

//This is for open production client, should be stored in 'dist' folder:
app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname + '/dist/index.html'));
  res.send("Shutruk-Nahhunte");
});

// app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, _ => console.log(`Server started at ${PORT}...`));
// app.listen(PORT,HOST, _ => console.log(`Server started at ${PORT}...`));