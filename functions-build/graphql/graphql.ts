import { ApolloServer, gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello, lskafj!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// eslint-disable-next-line import/prefer-default-export
export const handler = server.createHandler();
