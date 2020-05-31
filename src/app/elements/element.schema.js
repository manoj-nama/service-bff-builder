const { gql } = require('apollo-server');

const typeDefs = gql`
  type Element {
    id: String,
    name: String
  }
`;

module.exports = typeDefs