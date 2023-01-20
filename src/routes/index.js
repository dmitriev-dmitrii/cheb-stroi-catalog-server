import { Router } from 'express'
const router = Router();


router.get('/', function(req, res, next) {
    res.send( 'Hello Express!' );
});

// router.use('/products', require('./products/index') );


export default router