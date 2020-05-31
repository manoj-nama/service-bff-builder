const { gql } = require('apollo-server');

const userSchema = require('./users/user.schema');
const projectSchema = require('./projects/project.schema');
const endpointSchema = require('./endpoints/endpoint.schema');
const elementSchema = require('./elements/element.schema');

const schema = gql`
  type Query {
    projects: [Project]
  }

  ${userSchema}
  ${projectSchema}
  ${endpointSchema}
  ${elementSchema}
`;

module.exports = schema