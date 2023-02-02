
import Product  from '../../models/products/index.js'

const deleteProductById = (req, res) => {
    Product
        .findByIdAndRemove(req.body.id)
        .then((result) => {
            res.send(result)
                // .status(200)
                // .json(result);
        })
};

export default  {
    deleteById  : deleteProductById 
}
