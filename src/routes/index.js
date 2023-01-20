import { Router } from 'express'
import products from './products/index.js'
const router = Router();


router.get('/', function(req, res, next) {
    res.send( 'Hello Express!' );
});

router.use('/products', products );


export default router