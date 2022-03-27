var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    getAllItemsType: [Item],
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
    id: String
    title: String
    price: Price
    picture: String
    condition: String
    free_shipping: Boolean
    sold_quantity: Float
    description: String
  }



  type Price {
    currency: String
    amount: Float
    decimals: Float
  }
  
`);

module.exports = schema;