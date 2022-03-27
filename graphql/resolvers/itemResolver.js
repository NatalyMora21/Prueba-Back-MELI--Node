const axios = require("axios");

const resolvers = {
    Query: {
        getAllItemsType: ()=> getAllItemsResolver(),
        getItem: ()=> getItemResolver()
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

const getAllItemsResolver = async () => {
    const { data: items } = await axios("https://api.mercadolibre.com/sites/MLA/search?q=carros");
    return(items.results);
}

const getItemResolver = async () => {
    const { data: item } = await axios("https://api.mercadolibre.com/items/MLA854978355");
    const { data: itemDescription} = await axios("https://api.mercadolibre.com/items/MLA854978355/description");

    return({
        ...item,
        ...itemDescription
    });
}


module.exports = resolvers;
