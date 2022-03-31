
const axios = require("axios");

const BASE_URL = process.env._API_URL;



const allItems = async (req, res) => {

    const { data: items } = await axios("https://api.mercadolibre.com/sites/MLA/search?q=carros");
    console.log(items);

    const info = {
        author: {
            name: "Nataly ",
            lastname: "Mora Mancera"
        },
        items
    }

    res.json(info);


}


const infoItem = async (req, res) => {

    const infoitem = await axios("https://api.mercadolibre.com/sites/MLA/search?q=carros)");
    const descriptionItem = await axios("https://api.mercadolibre.com/sites/MLA/search?q=carros)");
    res.send('Info de un item especifico');

}


module.exports = {
    infoItem,
    allItems
};
