import productController from '../../controllers/products/index.js'
import { Router } from 'express'
const router = Router();


router.get('/', productController.Get.index );
// router.get('/:id', productController.Get.byId );
//
// router.post('/create', productController.Post.create );
// router.put('/update/:id', productController.Put.updateById );


export default router;



