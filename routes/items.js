const {Router} = require('express');
//Con esto se podrá acceder a todas las propiedades del router
const router = Router();
//const {allplayers,updateGamerWon}= require('../controllers/players');

//consultar los productos relacionados a la búsqueda
router.get('/:item',allItems);
//Consultar un producto específico
router.get('/:id',infoItem);


module.exports = router;