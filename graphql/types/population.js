const {
  GraphQLObjectType,  
  GraphQLInt
} = require('graphql');

const { globalIdField } = require('graphql-relay');

const Population = new GraphQLObjectType({
  name: "Population",
  description: "Population type",
  fields: () => ({
    id: globalIdField(),
    number: {
      type: GraphQLInt,
      description: "Population nimber"
    }
  })
});

module.exports = Population;