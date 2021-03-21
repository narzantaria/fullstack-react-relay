const { GraphQLObjectType } = require('graphql');
const Population = require('./types/population');
const { getHeroesNumber } = require('../data/db');
const { v4: uuidv4 } = require('uuid');

const { pubsub, SOMETHING_UPDATED } = require('./pubsub');

const Subscription = new GraphQLObjectType({
  name: "Subscription",
  fields: {
    HeroesNumber: {
      type: Population,
      args: {},
      subscribe: () => pubsub.asyncIterator(SOMETHING_UPDATED),
      resolve: () => {
        return getHeroesNumber()
          .then(result => {
            return {
              id: uuidv4(),
              number: result
            };
          })
      }
    }
  }
});

module.exports = Subscription;