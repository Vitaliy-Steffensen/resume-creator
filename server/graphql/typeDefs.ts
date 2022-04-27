import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type User {
    email: String
  }
  type Query {
    getUsers: [User]
  }
`;

export default typeDefs;
