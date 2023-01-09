const express = require('express');

const productController = require ('../../controllers/products')
const router = express.Router();


router.get('/', productController.Get.index );
router.get('/:id', productController.Get.byId );

router.post('/create', productController.Post.create );
router.put('/update/:id', productController.Put.updateById );

module.exports = router;



