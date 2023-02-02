
import Product  from '../../models/products/index.js'

const getProductsList =  (req, res)=>{

        Product
            .find()
            .then((data) => {
              
                res.send(data)
            })
            .catch((err) => {
                console.log(err)
            } );
};

const getProductById =  async (req, res)=>{
try{
  const result =  await  Product.findById( req.params.id )  

  if (!result) {
    console.log(result);
    res.sendStatus(404)
    return
  }

  res.send(result)

}
catch(err){
    console.log(err)
}

};

export default  {
    index: getProductsList,
    byId : getProductById
}