const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const { connectionArgs, connectionDefinitions, connectionFromArray, connectionFromPromisedArray, globalIdField } = require('graphql-relay');
const { nodeInterface } = require('./nodes');

const Hero = new GraphQLObjectType({
  name: "Hero",
  description: "Hero type",
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField(),
    name: {
      type: GraphQLString,
      description: "Hero Name"
    },
    date: {
      type: GraphQLString,
      description: "Hero date of birth"
    }
  })
});

const { connectionType: HeroConnection } = connectionDefinitions({
  nodeType: Hero
});

module.exports = { Hero, HeroConnection };