const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const typeDefs  =  require ('./graphql/schema/itemsSchema');
const resolver = require ('./graphql/resolvers/itemResolver');

const { makeExecutableSchema } = require('graphql-tools');
const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolver,
});



const app = express();

     

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue:resolver,
    graphiql: true,
  }),
);


module.exports = app;
