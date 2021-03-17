const { nodeDefinitions, fromGlobalId } = require('graphql-relay');
const { getHero } = require('../../data/db');

const { nodeField, nodesField, nodeInterface } = nodeDefinitions(
  async (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    return await getHero(id);
  },
  (obj) => {
    const { Hero } = require('../types/hero');
    return Hero;
  }
);

module.exports = { nodeInterface, nodeField, nodesField };