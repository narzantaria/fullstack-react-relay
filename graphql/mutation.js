const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean
} = require('graphql');

const { fromGlobalId, connectionArgs, connectionFromPromisedArray, mutationWithClientMutationId } = require('graphql-relay');
const { Hero, HeroConnection } = require('./types/hero');

const { addHero, updHero, removeHero } = require('../data/db');

const { pubsub, SOMETHING_UPDATED } = require('./pubsub');

const CreateHeroMutation = mutationWithClientMutationId({
  name: "CreateHero",
  inputFields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    date: { type: new GraphQLNonNull(GraphQLString) }
  },
  outputFields: {
    hero: {
      type: Hero,
      resolve: obj => obj
    },
    // heroes: { type: new GraphQLNonNull(HeroConnection) }
  },
  mutateAndGetPayload: args => {
    return addHero(args)
      .then(result => {
        pubsub.publish(SOMETHING_UPDATED);
        return result;
      });
  }
});

const UpdateHeroMutation = mutationWithClientMutationId({
  name: "UpdateHero",
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    date: { type: GraphQLString }
  },
  outputFields: {
    updatedId: { type: GraphQLString },
    updated: { type: GraphQLBoolean }
  },
  mutateAndGetPayload: async (args) => {
    await updHero(args);
    return {
      updatedId: args.id,
      updated: true
    }
  }
});

const RemoveHeroMutation = mutationWithClientMutationId({
  name: "RemoveHero",
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    deletedId: { type: GraphQLString },
    deleted: { type: GraphQLBoolean },
  },
  mutateAndGetPayload: async (args) => {
    const { id: productId } = fromGlobalId(args.id);
    await removeHero(productId);
    return {
      deletedId: args.id,
      deleted: true,
    };
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Mutations",
  fields: {
    createHero: CreateHeroMutation,
    updateHero: UpdateHeroMutation,
    removeHero: RemoveHeroMutation
  }
});

module.exports = Mutation;