const express = require('express');
const cors = require('cors');
const config = require('config');

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

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.get('/', (req, res) => {
  res.send("Shutruk-Nahhunte");
});

app.listen(PORT, _ => console.log(`Server started at ${PORT}...`));
// app.listen(PORT,HOST, _ => console.log(`Server started at ${PORT}...`));