const { PubSub } = require('graphql-subscriptions');

const pubsub = new PubSub();

const SOMETHING_UPDATED = 'SOMETHING_UPDATED';

module.exports = { pubsub, SOMETHING_UPDATED };