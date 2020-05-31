const { gql } = require('apollo-server');

const typeDefs = gql`
  type Project {
    id: String,
    name: String
  }
`;

module.exports = typeDefs