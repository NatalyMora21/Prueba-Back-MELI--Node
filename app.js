const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const typeDefs  =  require ('./graphql/schema/itemsSchema');
const resolver = require ('./graphql/resolvers/itemResolver');
const cors = require('cors');





const app = express();
app.use(cors())

const { makeExecutableSchema } = require('graphql-tools');
const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolver,
});
     

app.use(
  '/graph',
  graphqlHTTP({
    schema,
    rootValue:resolver,
    graphiql: true,
  }),
);


module.exports = app;
