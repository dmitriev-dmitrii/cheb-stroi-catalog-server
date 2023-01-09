
const Product = require ('../../models/products')

const createProduct = (req, res) => {
    const newProduct = new Product(req.body);

    newProduct
        .save()
        .then((result) => {
            res.send()
        }).catch((err)=>{
            res.send(err)
    })

};



module.exports = {
    create: createProduct
}