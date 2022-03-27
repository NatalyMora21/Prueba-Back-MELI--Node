const {Router} = require('express');
//Con esto se podrá acceder a todas las propiedades del router
const router = Router();

const {allItems, infoItem} =  require ('../controllers/item');

//consultar los productos relacionados a la búsqueda
router.get('/all/:item',allItems);
//Consultar un producto específico
router.get('/:id',infoItem);


module.exports = router;