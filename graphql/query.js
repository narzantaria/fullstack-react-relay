const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
  GraphQLString
} = require('graphql');

const {
  connectionArgs,
  connectionFromArray,
  connectionFromPromisedArray,
  fromGlobalId
} = require('graphql-relay');

const { nodeField, nodesField } = require('./types/nodes');
const { Hero, HeroConnection } = require('./types/hero');

const { getHero, getHeroes } = require('../data/db');

const Root = new GraphQLObjectType({
  name: "Root",
  fields: {
    Hero: {
      type: Hero,
      args: { id: { type: GraphQLID } },
      resolve: (_, args) => {
        const { type, id } = fromGlobalId(args.id);
        return getHero(id)
          .then(hero => {
            return hero;
          });
      }
    },
    Heroes: {
      type: new GraphQLNonNull(HeroConnection),
      args: connectionArgs,
      resolve: (_, args) =>
        connectionFromPromisedArray(getHeroes()
          .then(heroes => {
            return heroes.map(hero => {
              return hero;
            });
          })
          .catch(err => {
            throw err;
          }), args)
    },
    id: {
      type: new GraphQLNonNull(GraphQLID),
      args: {},
      resolve: (_, args) => "rootId"
    }
  }
});

const Query = new GraphQLObjectType({
  name: "Query",
  description: "Query interface for our app",
  fields: {
    node: nodeField,
    nodes: nodesField,
    root: {
      name: "Root",
      description: "Query for docs",
      type: new GraphQLNonNull(Root),
      resolve: (_, args) => {
        return {};
      }
    }
  }
});

module.exports = Query;