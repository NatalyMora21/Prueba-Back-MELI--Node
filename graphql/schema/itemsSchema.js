var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    getAllItemsType(search: String): [Item]
    getItem:Item
  }

  type Item {
    id: String
    title: String
    price: Price
    picture: String
    condition: String
    free_shipping: Boolean
    sold_quantity: Float
  }

  type ItemInfo {
    item: Item
    description: String
  }

  type Price {
    currency: String
    amount: Float
    decimals: Float
  }
  
`);

module.exports = schema;