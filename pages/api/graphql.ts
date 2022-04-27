import { ApolloServer } from "apollo-server-micro";
import typeDefs from "../../server/graphql/typeDefs";
import resolvers from "../../server/graphql/resolvers";

const { sequelize } = require("../../server/models");

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);

  sequelize
    .authenticate()
    .then(() => console.log("server authenticated successfully"))
    .catch((error) => console.log("server authentication error ", error));
}

export const config = {
  api: {
    bodyParser: false,
  },
};

/*


import { ApolloServer } from "apollo-server";
import typeDefs from "../../server/graphql/typeDefs";
import resolvers from "../../server/graphql/resolvers";
const db = require("../../server/models");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);

  db.authenticate()
    .then(() => console.log("Database connected!!"))
    .catch((err) => console.log(err));
});

export {};


*/
