import productsController from '../../controllers/products/index.js'
import { Router } from 'express'
const router = Router();

router.get('/', productsController.Get.index );
router.get('/:id', productsController.Get.byId );
router.post('/create', productsController.Post.create );
router.put('/update/:id', productsController.Put.updateById );
router.delete('/delete/', productsController.Delete.deleteById );

export default router;



