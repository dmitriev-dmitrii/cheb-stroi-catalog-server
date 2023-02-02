
import Product  from '../../models/products/index.js'

const  updateProductById = async (req, res) => {
try {
    
const options = {new:true}
const result = await  Product.findByIdAndUpdate(req.body.id, req.body,options);

 res.send(result)
}

 catch (err) {
    res.send(err)
 }  

};

export default  {
    updateById : updateProductById
}