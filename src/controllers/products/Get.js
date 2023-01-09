
const Product = require ('../../models/products')

const getProductsList = (req, res)=>{

        Product
            .find()
            .then((data) => {
                res.send(data)
            })
            .catch((err) => {
                console.log(err)
            } );
};

const getProductById = (req, res)=>{

    Product
        .find()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
        } );
};

module.exports = {
    index: getProductsList,
    byId : getProductById
}