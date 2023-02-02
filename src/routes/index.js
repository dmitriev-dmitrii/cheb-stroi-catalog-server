import { Router } from 'express'
import products from './products/index.js'
const router = Router();


router.use('/api/catalog/products', products );


export default router