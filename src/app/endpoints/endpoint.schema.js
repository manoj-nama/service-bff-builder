const { gql } = require('apollo-server');

const typeDefs = gql`
  type Endpoint {
    id: String,
    name: String
  }
`;

module.exports = typeDefs