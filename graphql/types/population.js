const {
  GraphQLObjectType,  
  GraphQLInt
} = require('graphql');

const Population = new GraphQLObjectType({
  name: "Population",
  description: "Population type",
  fields: () => ({
    number: {
      type: GraphQLInt,
      description: "Population nimber"
    }
  })
});

module.exports = Population;