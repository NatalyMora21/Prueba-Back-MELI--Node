const axios = require("axios");

const resolvers = {
    Query: {
        getAllItemsType: (root, args)=> getAllItemsResolver(args),
        getItem: (root, args)=> getItemResolver(args)
    },
    Item: {
        price : (root)  => {
            return {
                currency: root.prices.prices[0].currency_id,
                amount: root.prices.prices[0].amount,
            }
        },
        picture: (root) => root.thumbnail,
        description: (root) => root.plain_text,
    },

}

const getAllItemsResolver = async (args) => {
    const {search} = args;
    console.log(search)
    const { data: items } = await axios(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`);
    console.log(items.results[0])
    return(items.results);
}

const getItemResolver = async (args) => {
    const {id} = args;

    console.log(id)

    const { data: item } = await axios(`https://api.mercadolibre.com/items/${id}`);
    const { data: itemDescription} = await axios(`https://api.mercadolibre.com/items/${id}/description`);


    console.log({
        ...item,
        ...itemDescription
    })

    return({
        ...item,
        ...itemDescription
    });
}


module.exports = resolvers;
