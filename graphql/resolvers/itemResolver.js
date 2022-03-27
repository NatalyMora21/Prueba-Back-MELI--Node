const axios = require("axios");

const resolvers = {
    Query: {
        getAllItemsType: (root, args)=> getAllItemsResolver(args),
        getItem: (root, args)=> getItemResolver(args)
    },
    Item: {
        price : (root)  => {
            return {
                currency: root.prices.currency_id,
                amount: root.prices.currency_id,
            }
        },
        picture: (root) => root.thumbnail
    },

    ItemInfo: {
        description : (root)  => {
            return {
                description: root.plain_text,
            }
        }
    }
}

const getAllItemsResolver = async (args) => {
    const {search} = args;
    console.log(search)
    const { data: items } = await axios(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`);
    return(items.results);
}

const getItemResolver = async (args) => {
    const {id} = args;

    const { data: item } = await axios(`https://api.mercadolibre.com/items/${id}`);
    const { data: itemDescription} = await axios(`https://api.mercadolibre.com/items/${id}/description`);

    return({
        ...item,
        ...itemDescription
    });
}


module.exports = resolvers;
