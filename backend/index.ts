require("dotenv").config();
import { ApolloServer } from "apollo-server";
import { schema } from "./src/schema";
import { dataSources } from "./src/dataSource";

const server = new ApolloServer({ schema, dataSources });

server.listen().then(({ url }) => {
  console.log("ENV", process.env.API_URL);
  console.log(`Server running at ${url}`);
});
