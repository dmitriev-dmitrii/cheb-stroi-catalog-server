
const Product = require ('../../models/products')

const createProduct = (req, res) => {
    const newProduct = new Product(req.body);

    newProduct
        .save()
        .then((result) => {
            res.send()
        })

};

const updateProductById = (req, res) => {
    Product
        .findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res
                .status(200)
                .json(result);
        })
};

module.exports = {
    updateById : updateProductById
}