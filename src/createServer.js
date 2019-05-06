const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation'); // Push data
const Query = require('./resolvers/Query'); // Pull data
const db = require('./db');

// Create the GraphQL Yoga Server. It's built on top of an Express and apollo-server.   

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, db }), // Need to access DB from the resolvers. This is by passing context.
  });
}

module.exports = createServer;
