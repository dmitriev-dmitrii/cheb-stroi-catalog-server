const express = require("express");
const router = express.Router();




router.get('/', function(req, res, next) {
    res.send( 'Hello Express' );
});

router.use('/products', require('./products/index') );

module.exports = router;