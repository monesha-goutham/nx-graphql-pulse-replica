/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApolloServer } from "apollo-server";

// import { dataSource, JsonPlaceHolderAPI } from "./dataSource";
import { dataSource } from './app/dataSources/dataSource';
import { typicodeResolvers, typicodeSchema } from './app/graphql/typicode/public-api';

import { makeExecutableSchema } from "apollo-server";

// make schema
const schema = makeExecutableSchema({
    typeDefs: typicodeSchema,
    resolvers: typicodeResolvers,

});


const server = new ApolloServer({schema, dataSources: dataSource,  });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })