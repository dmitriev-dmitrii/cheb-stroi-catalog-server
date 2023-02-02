
import Product  from '../../models/products/index.js'
const createProduct = (req, res) => {
    const newProduct = new Product(req.body);

    newProduct
        .save()
        .then((result) => {
            res.send(result)
        }).catch((err)=>{
            res.send(err)
    })

};

export default {
    create: createProduct
}