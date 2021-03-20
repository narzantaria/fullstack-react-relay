const express = require('express');
const cors = require('cors');
const config = require('config');

const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema, execute, subscribe } = require('graphql');
const { createServer } = require('http');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { makeExecutableSchema } = require('graphql-tools');

const PORT = config.get('PORT') || 5000;
const WS_PORT = config.get('WS_PORT') || 8888;
// const HOST = config.get('HOST');

const Query = require('./graphql/query');
const Mutation = require('./graphql/mutation');
const Subscription = require('./graphql/subscription');

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
  subscription: Subscription
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

const websocketServer = createServer(app);

websocketServer.listen(WS_PORT, () => console.log(
  `Websocket Server is now running on http://localhost:${WS_PORT}`
));

SubscriptionServer.create(
  {
    schema,
    execute,
    subscribe,
  },
  {
    server: websocketServer,
    path: '/graphql',
  },
);