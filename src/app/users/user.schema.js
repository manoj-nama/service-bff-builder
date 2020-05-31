const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: String,
    name: String
  }
`;

module.exports = typeDefs