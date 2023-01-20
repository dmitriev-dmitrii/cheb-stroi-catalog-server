
import Product  from '../../models/products/index.js'

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

export default  {
    index: getProductsList,
    byId : getProductById
}