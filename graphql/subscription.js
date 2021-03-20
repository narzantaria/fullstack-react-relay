const { GraphQLObjectType } = require('graphql');

const Population = require('./types/population');

const { getHeroesNumber } = require('../data/db');

const Subscription = new GraphQLObjectType({
  name: "Subscription",
  fields: {
    HeroesNumber: {
      type: Population,
      args: {},
      resolve: () => {
        return getHeroesNumber()
          .then(number => {
            return {
              number: number
            };
          })
      }
    }
  }
});

module.exports = Subscription;