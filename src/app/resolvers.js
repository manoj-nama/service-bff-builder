const userResolver = require('./users/user.resolver');
const projectResolver = require('./projects/project.resolver');
const endpointResolver = require('./endpoints/endpoint.resolver');
const elementResolver = require('./elements/element.resolver');

const resolvers = {
  Query: {
    projects: async (_, params, context) => {
      return [];
    }
  }
};

module.exports = resolvers;